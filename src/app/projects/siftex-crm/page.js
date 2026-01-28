'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './page.module.css';

export default function SiftexCRMPage() {
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
              <h1 className={styles.heading}>Siftex CRM & Marketing Automation Migration</h1>
              <div className={styles.meta}>
                <span className={styles.tag}>CRM Implementation</span>
                <span className={styles.divider}>•</span>
                <span>Client Leadership</span>
              </div>
              <p className={styles.intro}>
                Led the migration of a custom connector manufacturer from Microsoft Dynamics to a modern CRM 
                and marketing automation system. Built sophisticated lead routing, scoring, and nurture programs 
                that increased sales efficiency and enabled cross-product sales discovery for their 30,000-contact 
                database and 4-person sales team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className={styles.challenge}>
          <div className={styles.container}>
            <h2>The Challenge</h2>
            <p>
              Siftex, a manufacturer of custom connectors helping industrial companies connect machines and minimize 
              waste, was operating on an antiquated Microsoft Dynamics system. The legacy platform lacked modern 
              CRM capabilities, marketing automation tools, and efficient lead management—forcing the sales team to 
              manually route leads and track engagement without systematic scoring or nurture capabilities.
            </p>
            <p>
              The team needed to transition their operations to the new 
              system while maintaining business continuity. With custom field values that couldn't be directly mapped 
              from the old platform and a 4-person sales team dependent on lead flow, we needed to "drive the bus 
              while building the engine". We implemented routing rules, lead scoring, and automation workflows while 
              simultaneously migrating contacts and establishing new operational processes.
            </p>
          </div>
        </section>

        {/* Before/After System Comparison */}
        <section className={styles.comparison}>
          <div className={styles.container}>
            <h2>System Transformation</h2>
            <p className={styles.sectionIntro}>
              From legacy platform limitations to modern CRM and marketing automation capabilities.
            </p>

            <div className={styles.comparisonGrid}>
              {/* Microsoft Dynamics 4.0 - Before */}
              <div className={styles.comparisonCard}>
                <div className={styles.comparisonHeader}>
                  <h3>Microsoft Dynamics</h3>
                  <span className={styles.badge}>Legacy System</span>
                </div>
                <ul className={styles.comparisonList}>
                  <li className={styles.negative}>
                    <strong>Manual lead routing</strong>Sales team manually assigned leads without automation 
                    or territory logic
                  </li>
                  <li className={styles.negative}>
                    <strong>No marketing automation</strong>Email campaigns managed externally and lists imported via CSV with no 
                    behavioral tracking
                  </li>
                  <li className={styles.negative}>
                    <strong>Limited engagement visibility</strong>No lead scoring, activity tracking, or 
                    automated task creation for sales
                  </li>
                  <li className={styles.negative}>
                    <strong>Siloed customer data</strong>Customers segmented by single product lines, missing 
                    cross-sell opportunities
                  </li>
                  <li className={styles.negative}>
                    <strong>Unmappable custom fields</strong>Legacy data structure and fields made direct import/export nearly impossible
                  </li>
                </ul>
              </div>

              {/* SharpSpring - After */}
              <div className={styles.comparisonCard}>
                <div className={styles.comparisonHeader}>
                  <h3>SharpSpring + WordPress</h3>
                  <span className={styles.badge + ' ' + styles.badgeSuccess}>Modern Platform</span>
                </div>
                <ul className={styles.comparisonList}>
                  <li className={styles.positive}>
                    <strong>Intelligent lead routing</strong>Automated assignment based on location, industry, company 
                    size, and falling back on a round-robin distribution
                  </li>
                  <li className={styles.positive}>
                    <strong>Integrated marketing automation</strong>Email campaigns, behavioral tracking, and always-on nurture sequences
                  </li>
                  <li className={styles.positive}>
                    <strong>Behavioral lead scoring</strong>Automated sales tasks triggered by forms, engagement 
                    thresholds and content interaction
                  </li>
                  <li className={styles.positive}>
                    <strong>Cross-product visibility</strong>Nurture and education programs exposed customers to full 
                    product portfolio
                  </li>
                  <li className={styles.positive}>
                    <strong>Lifecycle automation</strong>Created proactive re-order communication tasks and fulfillment communication tasks to
                    reduce friction with rushed orders
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
              Worked with sales team to understand internal processes and build a sophisticated routing logic, lead scoring system, and 
              task infrastructure while managing the migration from legacy platform.
            </p>

            <div className={styles.implementationGrid}>
              <div className={styles.implementationCard}>
                <h3>Lead Routing System</h3>
                <p>
                  Built multi-criteria routing to assign leads to appropriate sales team members based on geographic 
                  location and company size. Implemented round-robin distribution within territories to balance 
                  workload across 4 sales staff while maintaining account continuity.
                </p>
              </div>

              <div className={styles.implementationCard}>
                <h3>Lead Scoring & Task Automation</h3>
                <p>
                  Developed behavioral scoring model tracking engagement with content, email interaction, and website 
                  activity. Created automated task workflows triggering sales actions at specific score thresholds, 
                  ensuring timely follow-up with engaged prospects.
                </p>
              </div>

              <div className={styles.implementationCard}>
                <h3>Nurture Program Architecture</h3>
                <p>
                  Designed always-on nurture sequences routing leads based on time in system, industry vertical, 
                  and ownership assignment. Built product promotion campaigns (5-10 per month) exposing customers to 
                  full product portfolio beyond their initial purchase category.
                </p>
              </div>

              <div className={styles.implementationCard}>
                <h3>Data Migration & Field Mapping</h3>
                <p>
                  Managed migration of 30,000 contacts from Microsoft Dynamics 4.0 to SharpSpring despite unmappable 
                  custom field structures. Developed new data architecture and established field mapping protocols to 
                  preserve critical customer information during transition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sales Operations & Automation */}
        <section className={styles.ux}>
          <div className={styles.container}>
            <h2>Sales Operations & Lifecycle Management</h2>
            <p className={styles.sectionIntro}>
              Built comprehensive automation supporting the entire customer lifecycle from lead capture 
              through fulfillment and reorder.
            </p>

            <div className={styles.uxGrid}>
              <div className={styles.uxCard}>
                <div className={styles.uxIcon}>🎯</div>
                <h3>Multi-factor Routing</h3>
                <p>
                  Automated lead assignment by geographic territories, company size, industry and existing 
                  account relationships, and then implemented a round-robin logic to balance distribution while ensuring customers maintained 
                  consistent sales rep contacts.
                </p>
              </div>

              <div className={styles.uxCard}>
                <div className={styles.uxIcon}>📊</div>
                <h3>Lifecycle-Driven Tasks</h3>
                <p>
                  Scoring thresholds triggered specific sales tasks for high-engagement leads, while lifecycle moments (restock notifications, technical drawing preparation, product feedback etc.) created customer specific tasks. This automated task creation 
                  reduced response time and improved lead conversion rates.

                </p>
              </div>

              <div className={styles.uxCard}>
                <div className={styles.uxIcon}>🔄</div>
                <h3>Proactive Reorder Reminders</h3>
                <p>
                  Created automated reorder task workflows based on customer purchase history and typical 
                  replenishment cycles. Proactive outreach reduced rush charges, improved customer satisfaction, 
                  and maintained predictable pipeline velocity for sales team.
                </p>
              </div>

              <div className={styles.uxCard}>
                <div className={styles.uxIcon}>📦</div>
                <h3>Fulfillment Communication</h3>
                <p>
                  Automated post-purchase communication keeping customers informed throughout fulfillment process. 
                  Status update workflows reduced inbound inquiries and set expectations, improving CSAT while 
                  freeing customer success team for higher-value interactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className={styles.results}>
          <div className={styles.container}>
            <h2>Results & Impact</h2>
            <p className={styles.sectionIntro}>
              The modern CRM and marketing automation infrastructure transformed sales efficiency and 
              customer engagement.
            </p>

            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <div className={styles.metricValue}>30K</div>
                <div className={styles.metricLabel}>Contacts Migrated</div>
                <p>Successfully transitioned entire database to modern platform</p>
              </div>

              <div className={styles.metricCard}>
                <div className={styles.metricValue}>6</div>
                <div className={styles.metricLabel}>Always-On Nurtures</div>
                <p>Industry and lifecycle-based automated sequences</p>
              </div>

              <div className={styles.metricCard}>
                <div className={styles.metricValue}>4</div>
                <div className={styles.metricLabel}>Sales Team Supported</div>
                <p>Automated routing and task management for entire team</p>
              </div>

              <div className={styles.metricCard}>
                <div className={styles.metricValue}>5-10</div>
                <div className={styles.metricLabel}>Monthly Campaigns</div>
                <p>Product promotions driving cross-sell discovery</p>
              </div>
            </div>

            <div className={styles.additionalResults}>
              <h3>Additional Outcomes</h3>
              <ul>
                <li>Increased sales response time through automated lead routing and engagement-triggered tasks</li>
                <li>Drove revenue growth as customers discovered full product portfolio through regular nurture communication</li>
                <li>Enabled cross-product sales to existing customers who had been supplied single product lines for years</li>
                <li>Improved sales efficiency with automated task creation moving deals from pipeline through fulfillment</li>
                <li>Reduced rush charges and increased CSAT through proactive reorder reminders and fulfillment updates</li>
                <li>Maintained business continuity during migration from legacy system to modern platform</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process 
        <section className={styles.process}>
          <div className={styles.container}>
            <h2>Implementation & Optimization</h2>
            <p>
              Led cross-functional team through complex migration while continuously refining automation 
              rules based on sales and customer success feedback.
            </p>

            <div className={styles.processTimeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelinePhase}>Platform Setup & Data Migration</div>
                <p>
                  Established SharpSpring instance and WordPress integration while managing 30,000-contact migration 
                  from Microsoft Dynamics. Developed new field architecture to accommodate unmappable legacy custom 
                  fields. Coordinated with designer and web developer to build supporting infrastructure while maintaining 
                  business operations during transition.
                </p>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelinePhase}>Routing & Scoring Implementation</div>
                <p>
                  Built sophisticated lead routing logic with geographic territory assignment, company size segmentation, 
                  and round-robin distribution. Developed behavioral scoring model and automated task triggers. Tested 
                  routing rules with sales team to ensure proper lead distribution and workload balance.
                </p>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelinePhase}>Nurture Program Development</div>
                <p>
                  Created always-on nurture sequences based on industry, lifecycle stage, and time in system. Built 
                  product promotion campaign templates for 5-10 monthly sends. Coordinated with account and paid media 
                  teams to align automation with broader campaign strategy and cross-channel messaging.
                </p>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelinePhase}>Continuous Optimization</div>
                <p>
                  Constantly refined routing rules and automated task creation based on sales and customer success 
                  feedback. Optimized lifecycle automation from deal close through fulfillment communication and 
                  proactive reorder reminders. Adjusted scoring thresholds and task triggers to improve sales 
                  efficiency and pipeline velocity.
                </p>
              </div>
            </div>
          </div>
        </section>*/}
      </main>
      <Footer />
    </>
  );
}
