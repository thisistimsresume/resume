'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './page.module.css';

export default function WebinarMigrationPage() {
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
              <h1 className={styles.heading}>Webinar Platform Migration</h1>
              <div className={styles.meta}>
                <span className={styles.tag}>Process Leadership</span>
                <span className={styles.divider}>•</span>
                <span>Cross-Functional Collaboration</span>
              </div>
              <p className={styles.intro}>
                Led the end-to-end migration of ActivTrak's webinar platform from Zoom Webinar to ON24, 
                managing technical implementation, cross-functional coordination, and process optimization 
                for a program serving 6100+ registrants across 12-18 webinars annually with over $3 million in ARR influenced in 2025.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className={styles.challenge}>
          <div className={styles.container}>
            <h2>The Challenge</h2>
            <p>
              ActivTrak's webinar program had scaled to 12-18 webinars annually with 6,100+ registrants, 
              but Zoom Webinar had become a data black hole. A limited Marketo integration restricted 
              personalization capabilities and hindered both internal efficiency and attendee engagement.
            </p>
            <p>
              Migrating required maintaining an uninterrupted webinar schedule while onboarding the new platform and architecting the data 
              flow to our marketing stack (Marketo and Salesforce), improving attendee experience through 
              enhanced personalization and dashboard customization, and streamlining internal workflows for marketing and sales follow-ups.
            </p>
          </div>
        </section>

        {/* Before/After Platform Comparison */}
        <section className={styles.comparison}>
          <div className={styles.container}>
            <h2>Platform Evolution</h2>
            <p className={styles.sectionIntro}>
              A side-by-side look at how the new platform addressed key limitations.
            </p>

            <div className={styles.comparisonGrid}>
              {/* Zoom Webinar - Before */}
              <div className={styles.comparisonCard}>
                <div className={styles.comparisonHeader}>
                  <h3>Zoom Webinar</h3>
                  <span className={styles.badge}>Legacy Platform</span>
                </div>
                <ul className={styles.comparisonList}>
                  <li className={styles.negative}>
                    <strong>Rigid content structure</strong>Limited dashboard customization options meant every webinar 
                    looked the same regardless of audience or content type
                  </li>
                  <li className={styles.negative}>
                    <strong>Poor attendee personalization</strong>Limited options to personalize the attendee dashboard to optimize for attendee conversion
                  </li>
                  <li className={styles.negative}>
                    <strong>Limited data collection and manual reporting</strong>CRM integration only provided basic attendee information which meant reporting and any personalization in follow-up had to be achieved manually. 
                  </li>
                  <li className={styles.negative}>
                    <strong>Limited engagement tools</strong>Basic polling and Q&A with no CTA or enhanced feedback features
                  </li>
                  <li className={styles.negative}>
                    <strong>Limited brand customization</strong>Able to adjust basics lilke background colors and logos, but unable to customize the look and feel of the platform to match brand standards
                  </li>
                </ul>
              </div>

              {/* ON24 - After */}
              <div className={styles.comparisonCard}>
                <div className={styles.comparisonHeader}>
                  <h3>ON24</h3>
                  <span className={styles.badge + ' ' + styles.badgeSuccess}>New Platform</span>
                </div>
                <ul className={styles.comparisonList}>
                  <li className={styles.positive}>
                    <strong>Stronger integrations</strong>Created direct Marketo and Salesforce sync with custom 
                    object architecture to add reporting data to our marketing and sales tools
                  </li>
                  <li className={styles.positive}>
                    <strong>Streamlined registration experience</strong>Updated registration experience integrating Marketo Landing Pages/Forms and   
                    featuring calendar links directly on the thank you page resulted in an almost 11% YoY attendance increase
                  </li>
                  <li className={styles.positive}>
                    <strong>Dynamic content control</strong>Marketo programs drive segmentation in the webinar platform to create highly personalized  
                    experiences
                  </li>
                  
                  <li className={styles.positive}>
                    <strong>Data driven event follow-up</strong>Integrated customer event interaction data to personalize sales follow-up sequences resulting in a noticeable increase in effectiveness in early testing
                  </li>
                  <li className={styles.positive}>
                    <strong>Template-based setup</strong>Reusable Marketo templates and automated workflows 
                    reduced web setup and on-demand changeover time by 75%
                  </li>
                  <li className={styles.positive}>
                    <strong>New branding opportunities</strong>Built dashboard templates with brand colors and fonts baked in, tying the webinar experience together with the website experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className={styles.technical}>
          <div className={styles.container}>
            <h2>Technical Implementation</h2>
            <p>
              The migration required building a robust technical foundation to ensure data integrity, 
              seamless integrations, and dynamic content capabilities.
            </p>

            <div className={styles.implementationGrid}>
              <div className={styles.implementationCard}>
                <h3>Custom Marketo Object</h3>
                <p>
                  Created a custom object in Marketo specifically for webinar data management, enabling 
                  better tracking of data beyond registration status and attendance. We mapped engagement metrics, interaction data and on-demand 
                  viewing across the entire webinar lifecycle and automated follow-up campaigns for sales to work.
                </p>
              </div>

              <div className={styles.implementationCard}>
                <h3>Salesforce Integration</h3>
                <p>
                  Established bidirectional sync between ON24 and Salesforce to map campaign members and basic data for top level reporting. Mapped custom fields and objects to 
                  ensure sales teams had real-time visibility into prospect engagement during personalized follow-ups.
                </p>
              </div>

              <div className={styles.implementationCard}>
                <h3>Dynamic Content Programs</h3>
                <p>
                  Built Marketo programs to manage segmentation dynamically and push segments to ON24. Segments govern the webinar content based on audience demographics, 
                  company attributes, and engagement history. This enabled personalized CTAs, relevant resource 
                  recommendations, and targeted follow-up sequences powered by data from the platform itself.
                </p>
              </div>

              <div className={styles.implementationCard}>
                <h3>Automated Campaign Routing</h3>
                <p>
                  Designed and implemented automated email routing campaigns for sales follow-ups in real time after the webinar. Additionally, created on-demand notifications for sales to work leads coming in after the live event is over. 
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* UX Improvements */}
        <section className={styles.ux}>
          <div className={styles.container}>
            <h2>User Experience Improvements</h2>
            <p className={styles.sectionIntro}>
              Beyond technical capabilities, the new platform delivered meaningful improvements to the 
              attendee experience.
            </p>

              
            <div className={styles.uxGrid}>
              <div className={styles.uxCard}>
                <div className={styles.uxIcon}>💡</div>
                <h3>New Engagement Options</h3>
                <p>
                  Live reactions, interactive polls, and real-time Q&A create a more dynamic experience. 
                  Attendees can interact with each other and speakers during sessions.
                </p>
              </div>
              <div className={styles.uxCard}>
                <div className={styles.uxIcon}>🗓️</div>
                <h3>Simplified Add-to-Calendar</h3>
                <p>
                  Reduced add-to-calendar friction by hosting personal calendar invites on the thank you page. Attendees able to access their personal join link from a browser or email for one-click join.
                </p>
              </div>
              <div className={styles.uxCard}>
                <div className={styles.uxIcon}>📺</div>
                <h3>On-Demand Flexibility</h3>
                <p>
                  Automatic recording availability with personalized landing pages. Viewers can skip to 
                  relevant segments, access CTAs on-demand and download session resources directly from the player.
                </p>
              </div>
               <div className={styles.uxCard}>
                <div className={styles.uxIcon}>📱</div>
                <h3>Mobile-Optimized Experience</h3>
                <p>
                  Responsive design ensures seamless viewing across devices. Mobile attendees can fully 
                  interact with polls, and Q&A without compromising functionality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results - Large Metrics */}
        <section className={styles.results}>
          <div className={styles.container}>
            <h2>Results & Impact</h2>
            <p className={styles.sectionIntro}>
              The migration delivered measurable improvements across operational efficiency, 
              attendee engagement, and program scalability.
            </p>

            <div className={styles.metricsGrid}>
              

              <div className={styles.metricCard}>
                <div className={styles.metricValue}>11%</div>
                <div className={styles.metricLabel}>Attendance Increase</div>
                <p>UX changes increased attendance by 11% across the same number of webinars YoY</p>
              </div>

              <div className={styles.metricCard}>
                <div className={styles.metricValue}>22%</div>
                <div className={styles.metricLabel}>Increase in CTA Interaction</div>
                <p>Additional CTA Placements led to a 22% increase in performance between Zoom and ON24</p>
              </div>

              <div className={styles.metricCard}>
                <div className={styles.metricValue}>$575k</div>
                <div className={styles.metricLabel}>ARR Increase</div>
                <p>Improved workflows and data boosted a $575k increase in ARR YoY with an upward trend via optimization</p>
              </div>

              <div className={styles.metricCard}>
                <div className={styles.metricValue}>75%</div>
                <div className={styles.metricLabel}>Reduction</div>
                <p>Reusable Marketo templates and workflows 
                    reduced web developer setup and on-demand changeover hours by 75%</p>
              </div>
            </div>
            

            <div className={styles.additionalResults}>
              <h3>Additional Outcomes</h3>
              <ul>
                <li>Enhanced sales team visibility into webinar engagement through Salesforce integration</li>
                <li>Enabled dynamic content personalization based on audience segments and behavior</li>
                <li>Streamlined post-webinar workflows with automated follow-up and on-demand access</li>
                <li>Established scalable foundation for future webinar program growth</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process & Collaboration */}
        <section className={styles.process}>
          <div className={styles.container}>
            <h2>Cross-Functional Leadership</h2>
            <p>
              Success required coordinating across multiple teams and managing competing priorities 
              throughout the migration.
            </p>

            <div className={styles.processTimeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelinePhase}>Discovery & Planning</div>
                <p>
                  Worked with marketing leadership to develop requirements, evaluated platform options and built the business case for leadership approval.
                </p>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelinePhase}>Technical Design</div>
                <p>
                  Architected data flow and integration strategy. Partnered with marketing ops to design 
                  custom object structure and field mapping. Created technical documentation for ongoing maintenance.
                </p>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelinePhase}>Testing & Validation</div>
                <p>
                  Ran test webinars on the new platform to validate functionality and evaluated performance through onboarding. Tested data sync, 
                  email workflows, and reporting dashboards. Gathered feedback from content team on UX improvements.
                </p>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelinePhase}>Migration & Training</div>
                <p>
                  Migrated historical data and rebuilt automation workflows. Trained content teams on new platform 
                  features and best practices. Documented processes and created guides.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
