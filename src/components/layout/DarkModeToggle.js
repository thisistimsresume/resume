'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getTheme, toggleTheme } from '@/lib/theme';
import styles from './DarkModeToggle.module.css';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(getTheme() === 'dark');
  }, []);

  const handleToggle = () => {
    const newTheme = toggleTheme();
    setIsDark(newTheme === 'dark');
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className={styles.toggle} />;
  }

  return (
    <motion.button
      className={styles.toggle}
      onClick={handleToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Show inactive icon - what clicking will switch TO */}
      <motion.div
        className={styles.iconWrapper}
        animate={{ rotate: isDark ? 540 : 360 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          // In dark mode, show sun (switch to light)
          <svg
            className={styles.icon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          // In light mode, show moon (switch to dark)
          <svg
            className={styles.icon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
}
