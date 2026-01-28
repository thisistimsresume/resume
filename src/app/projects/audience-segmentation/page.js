'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './page.module.css';

export default function AudienceSegmentationPage() {
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
              <h1 className={styles.heading}>Audience Segmentation & Dynamic Content System</h1>
              <div className={styles.meta}>
                <span className={styles.tag}>Marketing Operations</span>
                <span className={styles.divider}>•</span>
                <span>Technical Implementation</span>
              </div>
              <p className={styles.intro}>
                Designed and implemented a comprehensive audience segmentation strategy and dynamic content 
                system for ActivTrak's 200,000-contact database, reducing email build time by up to 12 hours per 
                campaign while enabling sophisticated multi-segment targeting across 80 audience segments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className={styles.challenge}>
          <div className={styles.container}>
            <h2>The Challenge</h2>
            <p>
              At ActivTrak we needed to deliver personalized email content to diverse audience 
              segments, but Marketo's dynamic content capabilities required predefined segmentation structures 
              before implementation, and existing segments were outdated and did not cover the breadth of the audience. Without a comprehensive segmentation strategy, we were building 
              separate email versions for each target audience, a process that consumed hours per campaign 
              depending on segment complexity.
            </p>
            <p>
              I spearheaded the creation of a segmentation framework  
              that could support targeting by plan type, company size, user role, job title, ARR, support plan, 
              add-on features, engagement activity, and contact ownership—with segments flexible enough to be 
              referenced across all campaigns while maintaining data integrity between Marketo and Salesforce.
            </p>
          </div>
        </section>

        {/* Segmentation Strategy */}
        <section className={styles.comparison}>
          <div className={styles.container}>
            <h2>Segmentation Architecture</h2>
            <p className={styles.sectionIntro}>
              Built a hierarchical segmentation system with 80 segments spanning organizational and behavioral dimensions.
            </p>

            {/*<div className={styles.segmentationDiagram}>
              <div className={styles.diagramPlaceholder}>
                <p>📊 Segmentation Hierarchy Chart</p>
                <p className={styles.placeholderNote}>
                  [Placeholder for segmentation diagram showing organizational hierarchy and overlapping demographics]
                </p>
              </div>
            </div>*/}

            <div className={styles.comparisonGrid}>
              {/* Organizational Segments */}
              <div className={styles.comparisonCard}>
                <div className={styles.comparisonHeader}>
                  <h3>Organizational Segments</h3>
                </div>
                <ul className={styles.comparisonList}>
                  <li className={styles.positive}>
                    <strong>Plan type</strong>Segmented by plan type and feature access
                  </li>
                  <li className={styles.positive}>
                    <strong>Company size</strong>Employee count ranges for very small business, SMB, mid-market, and enterprise
                  </li>
                  <li className={styles.positive}>
                    <strong>ARR brackets</strong>Revenue-based segmentation for account prioritization
                  </li>
                  <li className={styles.positive}>
                    <strong>Support plan</strong>Standard, premium, or enterprise support tier
                  </li>
                  <li className={styles.positive}>
                    <strong>Add-on features</strong>Specific feature adoption and product configuration
                  </li>
                </ul>
              </div>

              {/* Behavioral Segments */}
              <div className={styles.comparisonCard}>
                <div className={styles.comparisonHeader}>
                  <h3>Behavioral Segments</h3>
                </div>
                <ul className={styles.comparisonList}>
                  <li className={styles.positive}>
                    <strong>User role</strong>Admin, Creator, Configurator, Power User, or Viewerd user permissions
                  </li>
                  <li className={styles.positive}>
                    <strong>Job title</strong>or user persona targeting i.e. CEO, Sr. Manager, Customer Champion, Purchase Decision Maker etc. 
                  </li>
                  
                  <li className={styles.positive}>
                    <strong>Contact owner</strong>Sales rep or CSM assignment for coordinated outreach
                  </li>
                  <li className={styles.positive}>
                    <strong>Lifecycle stage</strong>Prospect, customer, at-risk, or expansion opportunity
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
              Required coordinating between Marketo segmentation, Salesforce data mapping, 
              and email template architecture to enable dynamic content at scale.
            </p>

            <div className={styles.implementationGrid}>
              <div className={styles.implementationCard}>
                <h3>Marketo Smart Lists</h3>
                <p>
                  Worked with marketing operations to build smart lists defining each segment's criteria. 
                  Established hierarchical logic to handle overlapping segments and ensure contacts appeared in 
                  appropriate priority order for dynamic content rendering.
                </p>
              </div>

              <div className={styles.implementationCard}>
                <h3>Salesforce Data Mapping</h3>
                <p>
                  Updated field mapping between Salesforce and Marketo to ensure segmentation data flowed 
                  correctly. Added new custom fields where needed and established data validation rules to 
                  maintain segment integrity across systems.
                </p>
              </div>

              <div className={styles.implementationCard}>
                <h3>Dynamic Content System</h3>
                <p>
                  Built dynamic content capabilities into email design system and templates. Solved technical 
                  challenge of Marketo stripping inline CSS from nested elements with strategic placement
                  of targeting code to preserve formatting while maintaining editability.
                </p>
              </div>

              <div className={styles.implementationCard}>
                <h3>Template Library Integration</h3>
                <p>
                  Implemented dynamic content across all email templates in the design system. Enabled 
                  activation through simple segment selection in Marketo's email editor, eliminating need 
                  for custom emails per segment included in the campaign.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Challenges */}
        <section className={styles.ux}>
          <div className={styles.container}>
            <h2>Technical Challenges & Solutions</h2>
            <p className={styles.sectionIntro}>
              Implementing dynamic content within Marketo's constraints required creative problem-solving 
              around CSS preservation and template architecture.
            </p>

            <div className={styles.uxGrid}>
              <div className={styles.uxCard}>
                <div className={styles.uxIcon}>⚠️</div>
                <h3>CSS Stripping Issue</h3>
                <p>
                  Marketo strips inline CSS from nested table elements during dynamic content processing. 
                  Discovered the issue caused formatting breaks in complex layouts with table cells inside 
                  table rows where targeting code was placed.
                </p>
              </div>

              <div className={styles.uxCard}>
                <div className={styles.uxIcon}>🔧</div>
                <h3>Strategic Code Placement</h3>
                <p>
                  Determined optimal locations for targeting code that preserved both formatting and editability. 
                  Placed dynamic content wrappers at parent table level rather than nested cells, maintaining 
                  inline styles while enabling segment-based rendering.
                </p>
              </div>

              <div className={styles.uxCard}>
                <div className={styles.uxIcon}>📐</div>
                <h3>Template Architecture</h3>
                <p>
                  Restructured email templates to support dynamic content without breaking design consistency. 
                  Created modular sections that could be swapped based on segment while maintaining responsive 
                  layout and brand standards.
                </p>
              </div>

              <div className={styles.uxCard}>
                <div className={styles.uxIcon}>✅</div>
                <h3>Testing & Validation</h3>
                <p>
                  Developed testing protocol to validate dynamic content rendering across all 80 segments. 
                  Ensured each segment received correct content variation with proper formatting across email 
                  clients and devices.
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
              The segmentation system and dynamic content implementation transformed email production 
              efficiency and targeting capabilities.
            </p>

            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <p><strong>Up to</strong></p>
                <div className={styles.metricValue}>12 hrs</div>
                <div className={styles.metricLabel}>Time Saved Per Campaign</div>
                <p>Single email build vs. multiple segment-specific versions</p>
              </div>

              <div className={styles.metricCard}>
                <div className={styles.metricValue}>80+</div>
                <div className={styles.metricLabel}>Active Segments</div>
                <p>Spanning organizational and behavioral dimensions</p>
              </div>

              <div className={styles.metricCard}>
                <div className={styles.metricValue}>200K</div>
                <div className={styles.metricLabel}>Contacts Segmented</div>
                <p>Entire database organized for targeted campaigns</p>
              </div>

              <div className={styles.metricCard}>
                <div className={styles.metricValue}>100%</div>
                <div className={styles.metricLabel}>Template Coverage</div>
                <p>Dynamic content enabled across all email templates</p>
              </div>
            </div>

            <div className={styles.additionalResults}>
              <h3>Additional Outcomes</h3>
              <ul>
                <li>Eliminated need to build separate emails for each audience segment across all campaigns</li>
                <li>Enabled sophisticated multi-segment targeting previously impossible due to build complexity</li>
                <li>Established scalable foundation for adding new segments without template updates</li>
                <li>Improved campaign personalization capabilities through granular audience targeting</li>
                <li>Created reusable segmentation framework referenced across lifecycle, nurture, and promotional campaigns</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className={styles.process}>
          <div className={styles.container}>
            <h2>Implementation Process</h2>
            <p>
              Success required close collaboration between email marketing and marketing operations 
              to align strategy, data architecture, and technical execution.
            </p>

            <div className={styles.processTimeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelinePhase}>Strategy Development</div>
                <p>
                  Designed comprehensive segmentation framework based on organizational attributes, user roles, 
                  product usage, and engagement behavior. Mapped segment hierarchy and overlap priority logic to support 
                  complex targeting scenarios across campaigns.
                </p>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelinePhase}>Data Architecture & Smart Lists</div>
                <p>
                  Collaborated with marketing operations to build smart lists in Marketo defining each segment, update Salesforce field mapping to ensure proper data flow and establish segment priority logic for dynamic content rendering.
                </p>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelinePhase}>Dynamic Content Development</div>
                <p>
                  Built dynamic content capabilities into email design system. Solved CSS 
                  preservation challenges through strategic targeting code placement. Implemented system across template library, ensuring segments could be activated through simple editor selection.
                </p>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelinePhase}>Ongoing Refinement</div>
                <p>
                  Continuously add new segments and refine existing definitions based on evolving business needs. Maintain system as database grows and product offerings expand.
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
