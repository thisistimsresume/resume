'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { defaultValues, fieldLabels, fieldHelpers } from '@/lib/emailTemplates';
import styles from './InputPanel.module.css';

export default function InputPanel({ values, onChange, onReset }) {
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (field, value) => {
    onChange({ ...values, [field]: value });
  };

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <h3 className={styles.title}>Email Personalization</h3>
        <button 
          className={styles.resetButton} 
          onClick={onReset}
          title="Reset to defaults"
        >
          Reset
        </button>
      </div>

      {/* Personalization Fields */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Personalization</span>
        </div>

        <div className={styles.field}>
          <label htmlFor="firstName" className={styles.label}>
            {fieldLabels.firstName}
          </label>
          <input
            id="firstName"
            type="text"
            className={styles.input}
            value={values.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            placeholder="Tim"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="company" className={styles.label}>
            {fieldLabels.company}
          </label>
          <input
            id="company"
            type="text"
            className={styles.input}
            value={values.company}
            onChange={(e) => handleChange('company', e.target.value)}
            placeholder="ActivTrak"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            {fieldLabels.email}
          </label>
          <input
            id="email"
            type="email"
            className={styles.input}
            value={values.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="hello@thisistimsresume.com"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="address" className={styles.label}>
            {fieldLabels.address}
          </label>
          <input
            id="address"
            type="text"
            className={styles.input}
            value={values.address}
            onChange={(e) => handleChange('address', e.target.value)}
            placeholder="1501 South MoPac Expressway..."
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="year" className={styles.label}>
            {fieldLabels.year}
          </label>
          <input
            id="year"
            type="text"
            className={styles.input}
            value={values.year}
            onChange={(e) => handleChange('year', e.target.value)}
            placeholder="2025"
          />
        </div>
      </div>

      {/* Productivity Metrics */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Productivity Metrics (2025)</span>
        </div>

        <div className={styles.field}>
          <label htmlFor="workdaySpan" className={styles.label}>
            {fieldLabels.workdaySpan}
          </label>
          <input
            id="workdaySpan"
            type="text"
            className={styles.input}
            value={values.workdaySpan}
            onChange={(e) => handleChange('workdaySpan', e.target.value)}
            onFocus={() => setFocusedField('workdaySpan')}
            onBlur={() => setFocusedField(null)}
            placeholder="8h 18m"
          />
          {focusedField === 'workdaySpan' && (
            <span className={styles.helper}>{fieldHelpers.workdaySpan}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="screenTime" className={styles.label}>
            {fieldLabels.screenTime}
          </label>
          <input
            id="screenTime"
            type="text"
            className={styles.input}
            value={values.screenTime}
            onChange={(e) => handleChange('screenTime', e.target.value)}
            onFocus={() => setFocusedField('screenTime')}
            onBlur={() => setFocusedField(null)}
            placeholder="7h 6m"
          />
          {focusedField === 'screenTime' && (
            <span className={styles.helper}>{fieldHelpers.screenTime}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="productiveTime" className={styles.label}>
            {fieldLabels.productiveTime}
          </label>
          <input
            id="productiveTime"
            type="text"
            className={styles.input}
            value={values.productiveTime}
            onChange={(e) => handleChange('productiveTime', e.target.value)}
            onFocus={() => setFocusedField('productiveTime')}
            onBlur={() => setFocusedField(null)}
            placeholder="6h 33m"
          />
          {focusedField === 'productiveTime' && (
            <span className={styles.helper}>{fieldHelpers.productiveTime}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="focusTime" className={styles.label}>
            {fieldLabels.focusTime}
          </label>
          <input
            id="focusTime"
            type="text"
            className={styles.input}
            value={values.focusTime}
            onChange={(e) => handleChange('focusTime', e.target.value)}
            onFocus={() => setFocusedField('focusTime')}
            onBlur={() => setFocusedField(null)}
            placeholder="4h 12m"
          />
          {focusedField === 'focusTime' && (
            <span className={styles.helper}>{fieldHelpers.focusTime}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="collaboration" className={styles.label}>
            {fieldLabels.collaboration}
          </label>
          <input
            id="collaboration"
            type="text"
            className={styles.input}
            value={values.collaboration}
            onChange={(e) => handleChange('collaboration', e.target.value)}
            onFocus={() => setFocusedField('collaboration')}
            onBlur={() => setFocusedField(null)}
            placeholder="44m"
          />
          {focusedField === 'collaboration' && (
            <span className={styles.helper}>{fieldHelpers.collaboration}</span>
          )}
        </div>
      </div>
    </div>
  );
}
