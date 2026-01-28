'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.heading}>Lets work together</h1>
          
          <a 
            href="mailto:hello@thisistimsresume.com" 
            className={styles.email}
          >
            hello@thisistimsresume.com
          </a>

          <div className={styles.bottom}>
            <a 
              href="mailto:hello@thisistimsresume.com"
              className={styles.link}
            >
              hello@thisistimsresume.com
            </a>
            <a 
              href="https://www.linkedin.com/in/timothymcurtis/" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
            <a 
              href="/Tim_Curtis_Resume.pdf" 
              download
              className={styles.link}
            >
              Download My Resume
            </a>
            
            <span className={styles.copyright} >
              © {currentYear} Tim Curtis
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
