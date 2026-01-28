'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './page.module.css';

const projects = [
  {
    slug: 'velocity-email',
    title: 'Interactive Email with Velocity Scripting',
    tag: 'Technical Execution',
    description: 'Live demonstration of dynamic email personalization using Marketo Velocity scripting with real-time preview and code visualization.',
  },
  {
    slug: 'on24-migration',
    title: 'On24 Webinar Migration & Operations',
    tag: 'Project Management',
    description: 'Cross-functional project leading platform migration, landing page optimization, and SFDC integration. 4.46% attendance increase, $150K+ ARR impact.',
  },
  {
    slug: 'gym-nurture',
    title: 'Customer Onboarding Nurture Optimization',
    tag: 'Strategic Optimization',
    description: '105% open rate increase, 4700% click rate increase for SaaS client onboarding program through strategic email redesign and automation.',
  },
  {
    slug: 'segmentation',
    title: 'Segmentation Strategy & Scalable Architecture',
    tag: 'Operational Framework',
    description: 'Dynamic content framework saving 3 hours per email build across 12-16 emails monthly through strategic segmentation and template architecture.',
  },
  {
    slug: 'siftex',
    title: 'Siftex Lead Management & Revenue Operations',
    tag: 'End-to-End System',
    description: 'Complete lead scoring model, intelligent routing logic, and sales automation workflows demonstrating strategic RevOps thinking.',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className={styles.heading}>Projects</h1>
              <p className={styles.intro}>
                I make things, I problem solve, write, design and find solutions for complex problems. 
                Check out some things I'm proud of below!
              </p>
            </motion.div>
          </div>
        </section>

        <section className={styles.projects}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/projects/${project.slug}`} className={styles.cardLink}>
                    <div className={styles.tag}>{project.tag}</div>
                    <h2 className={styles.title}>{project.title}</h2>
                    <p className={styles.description}>{project.description}</p>
                    <span className={styles.arrow}>View Project →</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
