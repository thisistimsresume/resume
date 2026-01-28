'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './page.module.css';

export default function GymNurturePage() {
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
              <h1 className={styles.heading}>Gym Software Lead Nurture</h1>
              <div className={styles.meta}>
                <span className={styles.tag}>Marketing Automation</span>
                <span className={styles.divider}>•</span>
                <span>Email Strategy & Execution</span>
              </div>
              <p className={styles.intro}>
                Designed and implemented a dual-series email automation program for a gym management software company, 
                delivering increases of <strong>105%</strong> in open rate, <strong>4,721%</strong> in click rate, and <strong>2,242%</strong> in click-to-open rate 
                while establishing a scalable lead qualification system.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className={styles.challenge}>
          <div className={styles.container}>
            <h2>The Challenge</h2>
            <p>
              A gym management software company was struggling with email performance significantly below industry 
              benchmarks. With an 18.46% open rate (vs. 21.29% industry average) and a 0.33% click rate (vs. 2.45% 
              industry average), their inconsistent email strategy wasn't generating the engagement needed to move 
              leads through their sales cycle.
            </p>
            <p>
              The company lacked the internal resources to maintain regular communication with prospects, and didn't have a systematic 
              approach to nurturing leads over the sales cycle. They needed a scalable solution that would engage cold leads, 
              qualify interested prospects, and free up the sales team to focus on high-quality demos.
            </p>
          </div>
        </section>

        {/* Before/After Approach Comparison */}
        <section className={styles.comparison}>
          <div className={styles.container}>
            <h2>Automation Strategy</h2>
            <p className={styles.sectionIntro}>
              A dual-series approach targeting leads at different funnel stages with automated progression.
            </p>

            <div className={styles.comparisonGrid}>
              {/* Engagement Series */}
              <div className={styles.comparisonCard}>
                <div className={styles.comparisonHeader}>
                  <h3>Engagement Series</h3>
                  <span className={styles.badge}>12 Emails / 12 Weeks</span>
                </div>
                <ul className={styles.comparisonList}>
                  <li className={styles.positive}>
                    <strong>Feature showcases</strong>Highlighted competitive advantages and cloud software updates
                  </li>
                  <li className={styles.positive}>
                    <strong>Peer-perspective case studies</strong>Wrote client success stories from similar industry positions
                  </li>
                  <li className={styles.positive}>
                    <strong>Organic scheduling</strong>Random timing over 12 weeks avoided fatigue
                  </li>
                  <li className={styles.positive}>
                    <strong>Weighted engagement scoring</strong>Tracked interactions on a per-piece basis
                  </li>
                  <li className={styles.positive}>
                    <strong>Qualification trigger</strong>3-4 engagements advanced leads to conversion series
                  </li>
                </ul>
              </div>

              {/* Conversion Series */}
              <div className={styles.comparisonCard}>
                <div className={styles.comparisonHeader}>
                  <h3>Conversion Series</h3>
                  <span className={styles.badge + ' ' + styles.badgeSuccess}>4 Emails / 2 Weeks</span>
                </div>
                <ul className={styles.comparisonList}>
                  <li className={styles.positive}>
                    <strong>Direct demo appeals</strong>First email with calendar booking link
                  </li>
                  <li className={styles.positive}>
                    <strong>Soft touch follow-ups</strong>Two informational emails with subtle CTAs
                  </li>
                  <li className={styles.positive}>
                    <strong>Smart content triggers</strong>Interaction with content in emails 2 or 3 sent trigger for sales-focused messaging (email 4)
                  </li>
                  <li className={styles.positive}>
                    <strong>Final push</strong>Fourth email with strong CTA to book a meeting 
                  </li>
                  <li className={styles.positive}>
                    <strong>Sales enablement</strong>Freed sales team from time spent chasing bookings to scheduled calls and direct targeted outreach
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Diagrams */}
        <section className={styles.workflow}>
          <div className={styles.container}>
            <h2>Automation Workflows</h2>
            <p className={styles.sectionIntro}>
              Visual representations of how leads progressed through each series based on engagement patterns.
            </p>

            <div className={styles.workflowDiagrams}>
              <div className={styles.workflowDiagram}>
                <h3>Engagement Series Flow</h3>
                <p className={styles.diagramCaption}>
                  12 emails distributed over 12 with weighted scoring. 3+ engagements trigger 
                  progression to conversion series.
                </p>
                <div className={styles.diagramImage}>
                  <img 
                    src="/images/gym-nurture-engagement.png" 
                    alt="Engagement series workflow showing 12 emails leading to conversion series qualification"
                  />
                </div>
              </div>

              <div className={styles.workflowDiagram}>
                <h3>Conversion Series Flow</h3>
                <p className={styles.diagramCaption}>
                  4-email sequence with direct demo appeals, soft touch follow-ups, and smart content triggers 
                  based on interaction.
                </p>
                <div className={styles.diagramImage}>
                  <img 
                    src="/images/gym-nurture-conversion.svg" 
                    alt="Conversion series workflow showing progression from demo appeal to booking"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className={styles.technical}>
          <div className={styles.container}>
            <h2>Technical Implementation</h2>
            <p>
              The automation required building content branching logic, and configuring calendar 
              integration to support the workflow and sales cycle.
            </p>

            <div className={styles.implementationGrid}>
               <div className={styles.implementationCard}>
                <h3>Automation Architecture</h3>
                <p>
                  Built content branching logic to track engagement patterns and progression triggers to move leads 
                  between series. Developed fallback 
                  sequences and sales follow-up automations for non-responders.
                </p>
              </div>

              <div className={styles.implementationCard}>
                <h3>Email Design & Development</h3>
                <p>
                  Designed and hand-coded 16 emails across both series with mobile-responsive layouts and
                  brand consistency. Created modular templates for future campaigns 
                  and scalability.
                </p>
              </div>

             

              <div className={styles.implementationCard}>
                <h3>Calendar Integration</h3>
                <p>
                  Integrated team calendar booking directly into Google Workspace, eliminating friction 
                  in the demo scheduling process. Automated confirmation and reminder sequences for booked appointments.
                </p>
              </div>
              <div className={styles.implementationCard}>
                <h3>Content Development</h3>
                <p>
                  Wrote peer-perspective case studies showcasing client success stories, repurposed existing 
                  materials for different funnel stages, and developed new feature-focused content targeting 
                  specific buyer concerns and competitive advantages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Strategy */}
        <section className={styles.ux}>
          <div className={styles.container}>
            <h2>Content Strategy</h2>
            <p className={styles.sectionIntro}>
              Email content was tailored to address specific buyer concerns and guide leads through 
              their decision-making process.
            </p>

            <div className={styles.uxGrid}>
              <div className={styles.uxCard}>
                <div className={styles.uxIcon}>📊</div>
                <h3>Feature Education</h3>
                <p>
                  Showcased competitive advantages and recently launched software capabilities. 
                  Addressed common objections and highlighted improvements that set the product apart from 
                  other vendors.
                </p>
              </div>

              <div className={styles.uxCard}>
                <div className={styles.uxIcon}>🤝</div>
                <h3>Peer Validation</h3>
                <p>
                  Case studies written from the perspective of similar fitness clubs and gyms. Demonstrated 
                  real-world results and ROI from clients in comparable situations, building trust through 
                  social proof.
                </p>
              </div>

              <div className={styles.uxCard}>
                <div className={styles.uxIcon}>🎯</div>
                <h3>Behavioral Targeting</h3>
                <p>
                  Smart branching served different content based on interactions in the nurture. Engaged
                  leads received more conversion-focused messaging while less engaged leads continued education track.
                </p>
              </div>

              <div className={styles.uxCard}>
                <div className={styles.uxIcon}>📅</div>
                <h3>Organic Timing</h3>
                <p>
                  Emails scheduled at varied intervals to feel natural rather than automated. Avoided predictable 
                  weekly patterns that could be perceived as generic newsletters, maintaining authentic communication.
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
              The automation program dramatically outperformed both historical performance and industry 
              benchmarks across all key metrics.
            </p>

            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <div className={styles.metricValue}>105%</div>
                <div className={styles.metricLabel}>Increase in Open Rate</div>
                <p>From 18.46% to 37.99% (vs. 21.29% industry benchmark)</p>
              </div>

              <div className={styles.metricCard}>
                <div className={styles.metricValue}>4,721%</div>
                <div className={styles.metricLabel}>Increase in Click Rate</div>
                <p>From 0.33% to 15.93% (vs. 2.45% industry benchmark)</p>
              </div>

              <div className={styles.metricCard}>
                <div className={styles.metricValue}>2,242%</div>
                <div className={styles.metricLabel}>Increase in Click-to-Open</div>
                <p>From 1.79% to 41.93% (vs. 14.58% industry benchmark)</p>
              </div>

              <div className={styles.metricCard}>
                <div className={styles.metricValue}>0.7%</div>
                <div className={styles.metricLabel}>Conversion Rate</div>
                <p>Engaged leads booking demos through automation</p>
              </div>
            </div>

            <div className={styles.additionalResults}>
              <h3>Additional Outcomes</h3>
              <ul>
                <li>Established scalable lead qualification system that automatically moved prospects through the funnel</li>
                <li>Freed sales team to focus on qualified demos rather than cold outreach and lead chasing</li>
                <li>General marketing emails also improved: 25.1% open rate (+36%), 3.61% click rate (+992%)</li>
                <li>Created reusable content library and email templates for future campaigns</li>
                <li>Enabled comprehensive tracking of lead journey from first touch through demo booking</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process & Optimization */}
        <section className={styles.process}>
          <div className={styles.container}>
            <h2>Process & Optimization</h2>
            <p>
              Post-launch analysis revealed opportunities for continued refinement to improve lead quality 
              and conversion rates.
            </p>

            <div className={styles.processTimeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelinePhase}>Content Creation & Design</div>
                <p>
                  Developed all content, writing peer-perspective case studies and feature-focused 
                  materials. Designed and coded 16 responsive emails with mobile optimization and brand consistency. 
                  Created supporting assets and downloadable resources.
                </p>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelinePhase}>Automation Development & Launch</div>
                <p>
                  Built progression triggers, and smart branching logic. Integrated calendar 
                  booking system and established lead journey metrics. Tested workflows and 
                  launched both series simultaneously.
                </p>
              </div>

              

              <div className={styles.timelineItem}>
                <div className={styles.timelinePhase}>Ongoing Refinement</div>
                <p>
                  Adjusted engagement thresholds as higher-funnel leads progressed through system. Enhanced list hygiene 
                  to prevent existing clients from entering lead nurture tracks.
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
