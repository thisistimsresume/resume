'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { processVelocityTokens, defaultFormData, inboxFields } from '@/lib/emailProcessor';
import { highlightHTML } from '@/lib/htmlHighlighter';
import styles from './page.module.css';

export default function VelocityEmailPage() {
  const [formData, setFormData] = useState(defaultFormData);
  const [emailHtml, setEmailHtml] = useState('');
  const [debouncedEmailHtml, setDebouncedEmailHtml] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [emailTemplate, setEmailTemplate] = useState('');
  const debounceTimerRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    // Load the email template
    fetch('/lib/plab-email.html')
      .then(res => res.text())
      .then(html => {
        setEmailTemplate(html);
        // Process with default values
        const processed = processVelocityTokens(html, defaultFormData);
        setEmailHtml(processed);
        setDebouncedEmailHtml(processed);
      });
  }, []);

  // Update email HTML with debouncing for iframe
  useEffect(() => {
    if (emailTemplate) {
      const processed = processVelocityTokens(emailTemplate, formData);
      setEmailHtml(processed); // Update immediately for code view
      
      // Debounce iframe updates to prevent flickering
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      
      debounceTimerRef.current = setTimeout(() => {
        // Instead of updating srcDoc, manually update iframe content
        const iframe = iframeRef.current;
        if (iframe && iframe.contentWindow) {
          try {
            const doc = iframe.contentWindow.document;
            const currentScroll = iframe.contentWindow.scrollY || 0;
            
            // Update document content without reload
            doc.open();
            doc.write(processed);
            doc.close();
            
            // Restore scroll immediately
            setTimeout(() => {
              iframe.contentWindow.scrollTo(0, currentScroll);
            }, 0);
          } catch (e) {
            // Fallback to srcDoc if direct access fails
            setDebouncedEmailHtml(processed);
          }
        } else {
          setDebouncedEmailHtml(processed);
        }
      }, 500);
    }
    
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [formData, emailTemplate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleView = () => {
    setShowCode(!showCode);
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className={styles.heading}>Personalization via Velocity Scripting</h1>
              <div className={styles.meta}>
                <span className={styles.tag}>Technical Execution</span>
                <span className={styles.divider}>•</span>
                <span>Marketo Email Templates</span>
              </div>
              <p className={styles.intro}>
                Used Marketo Velocity scripting to create hyper-specific personalization based on user account data. Fill out the form below and watch the email content change instantly. Try the sample values shown in each field to see how different metrics affect customer health.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className={styles.demo}>
          <div className={styles.container}>
            {/*
            <h2>Interactive Demo</h2>
            <p className={styles.sectionIntro}>
              Edit the form values to see how Velocity scripting processes information and generates 
              personalized email content in real-time.
            </p> */}

            <div className={styles.demoGrid}>
              {/* Email Preview Column - 66% width */}
              <div className={styles.emailColumn}>
                {/* View Toggle with icons */}
                <div className={styles.toggleWrapper}>
                  <button 
                    className={styles.toggle}
                    onClick={toggleView}
                    aria-pressed={showCode}
                    aria-label={showCode ? "Switch to preview view" : "Switch to code view"}
                  >
                    <span className={styles.toggleButton} data-active={!showCode}>
                      {showCode ? (
                        // Eye icon - viewing code, show eye to go back to preview
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      ) : (
                        // Code icon - viewing preview, show code icon
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="16 18 22 12 16 6"/>
                          <polyline points="8 6 2 12 8 18"/>
                        </svg>
                      )}
                    </span>
                  </button>
                </div>

                {/* Inbox Fields */}
                <div className={styles.inboxFields}>
                  <div className={styles.inboxField}>
                    <strong>From:</strong> {inboxFields.from}
                  </div>
                  <div className={styles.inboxField}>
                    <strong>Reply-to:</strong> {inboxFields.fromAddress}
                  </div>
                  <div className={styles.inboxField}>
                    <strong>Subject:</strong> {inboxFields.subject(formData.companyName || 'Your organization')}
                  </div>
                  <div className={styles.inboxField}>
                    <strong>Preheader:</strong> {inboxFields.preheader}
                  </div>
                </div>

                {/* Email Preview/Code */}
                <div className={styles.preview}>
                  {showCode ? (
                    <pre className={styles.codeView}>
                      <code dangerouslySetInnerHTML={{ __html: highlightHTML(emailHtml) }} />
                    </pre>
                  ) : (
                    <iframe 
                      ref={iframeRef}
                      srcDoc={debouncedEmailHtml}
                      className={styles.emailFrame}
                      title="Email Preview"
                      sandbox="allow-same-origin allow-scripts"
                    />
                  )}
                </div>

                {/* GitHub Link Placeholder */}
                <div className={styles.githubLink}>
                  <a href="https://github.com/thisistimsresume/velocity-email" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    View Full Code on GitHub
                  </a>
                </div>
              </div>

              {/* Form Column - reordered */}
              <div className={styles.formColumn}>
                <div className={styles.form}>
                  <h3>Edit Values</h3>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="companyName">Company Name</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="workdaySpan">Workday Span</label>
                    <input
                      type="text"
                      id="workdaySpan"
                      name="workdaySpan"
                      value={formData.workdaySpan}
                      onChange={handleChange}
                      placeholder="Try 7h 12m, 8h 18m, 9h 15m and 10h 12m"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="totalTime">Screen Time</label>
                    <input
                      type="text"
                      id="totalTime"
                      name="totalTime"
                      value={formData.totalTime}
                      onChange={handleChange}
                      placeholder="Try 4h 14m, 7h 8m, 8h 19m, and 9h 37m"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="productiveTime">Productive Time</label>
                    <input
                      type="text"
                      id="productiveTime"
                      name="productiveTime"
                      value={formData.productiveTime}
                      onChange={handleChange}
                      placeholder="Try 4h 13m, 5h 22m, 6h 3m, 7h 48m and 8h 55m"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="focusTime">Focus Time</label>
                    <input
                      type="text"
                      id="focusTime"
                      name="focusTime"
                      value={formData.focusTime}
                      onChange={handleChange}
                      placeholder="Try 2h 9m, 4h 14m, 5h 18m and 6h 8m"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="collaborationTime">Collaboration Time</label>
                    <input
                      type="text"
                      id="collaborationTime"
                      name="collaborationTime"
                      value={formData.collaborationTime}
                      onChange={handleChange}
                      placeholder="Try 18m, 48m, 72m and 98m"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className={styles.problem}>
          <div className={styles.container}>
            <h2>The Challenge</h2>
            <p>
              At ActivTrak, we needed to send highly personalized productivity benchmark emails to customers 
              based on their unique account data. Each customer received their unique account data, and the messaging 
              needed to adapt based on whether their metrics fell within healthy ranges, required monitoring, 
              or needed immediate action.
            </p>
            <p>
              Creating individual email versions for every possible combination would have been impossible to 
              maintain. We needed a dynamic solution that could:
            </p>
            <ul>
              <li>Process complex data inputs (time strings, numerical ranges)</li>
              <li>Apply conditional logic to determine messaging</li>
              <li>Generate personalized content blocks dynamically</li>
              <li>Maintain consistency across thousands of recipients</li>
              <li>Scale efficiently without manual intervention</li>
            </ul>
          </div>
        </section>

        {/* Solution Section */}
        <section className={styles.solution}>
          <div className={styles.container}>
            <h2>The Solution</h2>
            <p>
              I developed a comprehensive Velocity scripting solution that automated the entire personalization 
              process. The script handles data parsing, conditional logic, and dynamic content generation, all 
              within the email program.
            </p>
            <div className={styles.solutionPoints}>
              <div className={styles.point}>
                <h3>Conditional Logic</h3>
                <p>
                  Implemented multi-tier logic that evaluates metrics against benchmarks and determines 
                  appropriate messaging (success, warning, or action required).
                </p>
              </div>
              <div className={styles.point}>
                <h3>Data Parsing</h3>
                <p>
                  Built custom functions to parse time strings (like "8h 18m") into usable formats for 
                  calculations and comparisons.
                </p>
              </div>
              
              <div className={styles.point}>
                <h3>Dynamic Content</h3>
                <p>
                  Generated personalized titles, colors, and messages based on each customer's specific 
                  data patterns.
                </p>
              </div>
              <div className={styles.point}>
                <h3>Fallback Handling</h3>
                <p>
                  Implemented robust error handling and smart list filters to ensure emails rendered 
                  correctly when data was missing or fell outside of expected values.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section className={styles.code}>
          <div className={styles.container}>
            <h2>Code Examples</h2>
            <p className={styles.sectionIntro}>
              Here's a look at the core Velocity scripting logic that powers the personalization:
            </p>

            <div className={styles.codeBlock}>
              <h3>Time Parsing Function</h3>
              <pre><code>{`## Parse time string (e.g., "8h 18m" or "44m") into minutes
#set($timeString = $lead.collaborationTime2025)
#if($timeString.contains("h"))
  #set($parts = $timeString.split("h"))
  #set($hours = $convert.toInteger($parts[0].trim()))
  #set($minutes = 0)
  #if($parts.size() > 1 && $parts[1] && $parts[1].trim() != "")
    #set($minutesPart = $parts[1].replace("m","").trim())
    #if($minutesPart != "")
      #set($minutes = $convert.toInteger($minutesPart))
    #end
  #end
  #set($value = ($hours * 60) + $minutes)
#else
  #set($minutesPart = $timeString.replace("m","").trim())
  #set($value = $convert.toInteger($minutesPart))
#end`}</code></pre>
            </div>

            <div className={styles.codeBlock}>
              <h3>Conditional Logic Example</h3>
              <pre><code>{`## Process Collaboration Time with conditional messaging
#if($value >= 30 && $value <= 60)
  <p><strong style="color: #2ED4B5;">Congrats!</strong> 
  Your collaboration time closely matches the benchmark...</p>
#elseif($value > 60 && $value <= 90)
  <p><strong style="color: #FBD13E;">Keep an eye on this.</strong> 
  Collaboration time is higher than the benchmark...</p>
#else
  <p><strong style="color: #FF864B;">This may call for action.</strong> 
  Collaboration time requires immediate attention...</p>
#end`}</code></pre>
            </div>

            <div className={styles.codeBlock}>
              <h3>Dynamic Content Token</h3>
              <pre><code>{`## Token usage in email template
<table>
  <tr>
    <td>
      {{my.Collaboration Time Content}}
    </td>
  </tr>
  <tr>
    <td>
      {{my.Focus Time Content}}
    </td>
  </tr>
</table>`}</code></pre>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
