import { NextRequest, NextResponse } from 'next/server';

// In-memory rate limiting (use Redis in production)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

// Clean up old entries every hour
setInterval(() => {
  const now = Date.now();
  for (const key of rateLimit.keys()) {
  const value = rateLimit.get(key);
  if (value && now > value.resetTime) {
    rateLimit.delete(key);
  }
}
}, 3600000);

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const limit = rateLimit.get(identifier);

  if (!limit || now > limit.resetTime) {
    // New window: allow request and set limit
    rateLimit.set(identifier, {
      count: 1,
      resetTime: now + 3600000, // 1 hour window
    });
    return true;
  }

  if (limit.count >= 3) {
    // Exceeded rate limit (3 submissions per hour)
    return false;
  }

  // Increment count
  limit.count++;
  return true;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function containsSpamKeywords(text: string): boolean {
  const spamKeywords = [
    'viagra', 'cialis', 'casino', 'lottery', 'prize',
    'click here', 'buy now', 'limited time', 'act now',
    'free money', 'earn money fast', 'weight loss',
    'crypto investment', 'bitcoin profit', 'forex trading'
  ];
  
  const lowerText = text.toLowerCase();
  return spamKeywords.some(keyword => lowerText.includes(keyword));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, timestamp } = body;

    // 1. Rate limiting based on IP
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      );
    }

    // 2. Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // 3. Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // 4. Check message length
    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 2000 characters.' },
        { status: 400 }
      );
    }

    // 5. Check for spam keywords
    if (containsSpamKeywords(message) || containsSpamKeywords(name)) {
      console.log('Spam detected: suspicious keywords');
      // Return success to avoid revealing spam detection
      return NextResponse.json({ success: true });
    }

    // 6. Check for excessive URLs
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const urls = message.match(urlPattern) || [];
    if (urls.length > 2) {
      console.log('Spam detected: too many URLs');
      return NextResponse.json({ success: true });
    }

    // 7. Timing check - prevent submissions less than 2 seconds after page load
    if (timestamp) {
      const timeSinceLoad = Date.now() - timestamp;
      if (timeSinceLoad < 500) {
        console.log('Spam detected: submission too fast');
        return NextResponse.json({ success: true });
      }
    }

    // 8. Check for disposable email domains (optional but recommended)
    const disposableDomains = [
      'tempmail.com', '10minutemail.com', 'guerrillamail.com',
      'mailinator.com', 'throwaway.email'
    ];
    const emailDomain = email.split('@')[1]?.toLowerCase();
    if (disposableDomains.includes(emailDomain)) {
      console.log('Spam detected: disposable email');
      return NextResponse.json({ success: true });
    }

    // All validations passed - send email
    // TODO: Implement your email sending logic here
    // Options: SendGrid, Resend, AWS SES, Nodemailer, etc.
    
    console.log('Valid submission:', { name, email, messageLength: message.length });

    // Example using Resend (recommended):
    
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'contact@thisistimsresume.com',
      to: 'hello@thisistimsresume.com',
      subject: `New Contact Form: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });
    

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
