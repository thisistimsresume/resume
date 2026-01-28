'use client';

import { useState, useEffect, FormEvent } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './contact.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Hidden field for spam detection
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formLoadTime, setFormLoadTime] = useState<number>(0);

  // Track when form loads to prevent instant submissions
  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Spam prevention checks
    
    // 1. Honeypot check - if filled, it's a bot
    if (formData.honeypot) {
      console.log('Spam detected: honeypot filled');
      return;
    }
    
    // 2. Timing check - prevent instant submissions (less than 3 seconds)
    const timeSinceLoad = Date.now() - formLoadTime;
    if (timeSinceLoad < 3000) {
      setErrorMessage('Please take your time filling out the form.');
      setStatus('error');
      return;
    }
    
    // 3. Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill out all fields.');
      setStatus('error');
      return;
    }
    
    // 4. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    
    // 5. Message length check (spam often has very short or very long messages)
    if (formData.message.length < 10) {
      setErrorMessage('Please provide a more detailed message (at least 10 characters).');
      setStatus('error');
      return;
    }
    
    if (formData.message.length > 2000) {
      setErrorMessage('Message is too long (maximum 2000 characters).');
      setStatus('error');
      return;
    }
    
    // 6. Check for suspicious patterns (multiple URLs in message)
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const urls = formData.message.match(urlPattern) || [];
    if (urls.length > 2) {
      setErrorMessage('Too many links detected in message.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Submit to your API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: Date.now(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '', honeypot: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Wanna Get in Touch?</h1>
            <p className={styles.subtitle}>
              Fill out the form to get in touch, I don't do spam. ✈️
            </p>
            <p className={styles.description}>
              Let's start something together. I'm available for contract work, full time positions and all sorts of things in between.
            </p>
            <p className={styles.cta}>
              Think we might be a fit? <strong>Get in touch,</strong> I'd love to hear from you!
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                maxLength={100}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                maxLength={100}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                maxLength={2000}
              />
              <span className={styles.charCount}>
                {formData.message.length}/2000
              </span>
            </div>

            {/* Honeypot field - hidden from users, bots will fill it */}
            <input
              type="text"
              name="website"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
              className={styles.honeypot}
              aria-hidden="true"
            />

            {status === 'error' && (
              <div className={styles.error}>{errorMessage}</div>
            )}

            {status === 'success' && (
              <div className={styles.success}>
                Thanks for reaching out! I'll get back to you soon.
              </div>
            )}

            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
