'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { initializeTheme } from '@/lib/theme';
import styles from './page.module.css';

export default function Home() {
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <motion.div
                className={styles.gifColumn}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={styles.gifWrapper}>
                  <img 
                    src="/images/ContactPageGIF.gif" 
                    alt="Hi, I'm Tim Curtis" 
                    className={styles.gif}
                  />
                </div>
              </motion.div>

              <motion.div
                className={styles.textColumn}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className={styles.greeting}>Hi, I'm Tim 👋</h1>
                
                <motion.p 
                  className={styles.intro}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  I'm a <strong>Senior Email Marketer</strong> and <strong>Marketing Automation and Operations expert</strong> with 
                  deep technical expertise in <strong>ESP and CRM</strong> platforms, <strong>email development</strong>, and <strong>cross-functional project management experience</strong>.
                
                  I create scalable digital workflows that drive business results and optimize user experience.
                </motion.p>

                <motion.div 
                  className={styles.cta}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <a 
                    href="/Tim_Curtis_Resume.pdf" 
                    download
                    className={styles.primaryButton}
                  >
                    Get My Resume
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className={styles.featured}>
          <div className={styles.container}>
            <motion.h2 
              className={styles.sectionHeading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Projects
            </motion.h2>

            <div className={styles.projectsWrapper}>
              {/* First row - 3 projects */}
              <div className={styles.projectsRow}>
                <motion.div
                  className={styles.projectCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href="/projects/velocity-email" className={styles.cardLink}>
                    <div className={styles.projectTag}>Technical Execution</div>
                    <h3 className={styles.projectTitle}>Personalization via Velocity Scripting</h3>
                    <p className={styles.projectDescription}>
                      Creating deep custom data driven personalization for customers at scale with Marketo velocity scripting.
                    </p>
                  </Link>
                </motion.div>

                <motion.div
                  className={styles.projectCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href="/projects/webinar-migration" className={styles.cardLink}>
                    <div className={styles.projectTag}>Project Management</div>
                    <h3 className={styles.projectTitle}>Webinar Platform Migration</h3>
                    <p className={styles.projectDescription}>
                      Project managing and leading the technical migration of a mission critical webinar platform while growing ARR, and optimizing user experience to increase attendance. 
                    </p>
                  </Link>
                </motion.div>

                <motion.div
                  className={styles.projectCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href="/projects/gym-nurture" className={styles.cardLink}>
                    <div className={styles.projectTag}>Strategic Optimization</div>
                    <h3 className={styles.projectTitle}>Sales Cycle Optimization Nurture</h3>
                    <p className={styles.projectDescription}>
                      Helping a SaaS company route leads more effectively to a small sales team, by bringing the booking process to the inbox.
                    </p>
                  </Link>
                </motion.div>
              </div>

              {/* Second row - 2 projects centered */}
              <div className={styles.projectsRowCentered}>
                <motion.div
                  className={styles.projectCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href="/projects/audience-segmentation" className={styles.cardLink}>
                    <div className={styles.projectTag}>Operational Framework</div>
                    <h3 className={styles.projectTitle}>Segmentation Strategy & Dynamic Content</h3>
                    <p className={styles.projectDescription}>
                      Strategizing and creating segmentation in Marketo to support and implement dynamic content across an email system. 
                    </p>
                  </Link>
                </motion.div>

                <motion.div
                  className={styles.projectCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href="/projects/siftex-crm" className={styles.cardLink}>
                    <div className={styles.projectTag}>Revenue Operations</div>
                    <h3 className={styles.projectTitle}>Siftex Lead Routing System</h3>
                    <p className={styles.projectDescription}>
                      Creating lead scoring, routing, and sales automation workflows to support revenue operations for a small sales team.
                    </p>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}