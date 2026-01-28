// Email Template Data for Interactive Demo

export const defaultValues = {
  // Personalization
  firstName: 'Tim',
  company: 'ActivTrak',
  email: 'hello@thisistimsresume.com',
  address: '1501 South MoPac Expressway, Suite 155 Austin, TX 78746',
  year: '2025',
  
  // Productivity Metrics
  workdaySpan: '8h 18m',
  screenTime: '7h 6m',
  productiveTime: '6h 33m',
  focusTime: '4h 12m',
  collaboration: '44m'
};

export const benchmarks = {
  workdaySpan: {
    value: '8h 18m',
    label: 'Workday Span',
    benchmark: '8h 18m',
    icon: 'timer',
    healthyRange: '7h 30m - 9h'
  },
  screenTime: {
    value: '7h 6m',
    label: 'Screen Time',
    benchmark: '7h 6m',
    icon: 'screen',
    healthyRange: '6h - 8h'
  },
  productiveTime: {
    value: '6h 33m',
    label: 'Productive Time',
    benchmark: '6h 33m',
    icon: 'time-ops',
    healthyRange: '5h 30m - 7h 30m'
  },
  focusTime: {
    value: '4h 12m',
    label: 'Focus Time',
    benchmark: '4h 12m',
    icon: 'light',
    healthyRange: '3h 30m - 5h'
  },
  collaboration: {
    value: '44m',
    label: 'Collaboration Time',
    benchmark: '44 mins',
    icon: 'team',
    healthyRange: '30m - 1h'
  }
};

export const fieldLabels = {
  firstName: 'First Name',
  company: 'Company',
  email: 'Email Address',
  address: 'Address',
  year: 'Year',
  workdaySpan: 'Workday Span',
  screenTime: 'Screen Time',
  productiveTime: 'Productive Time',
  focusTime: 'Focus Time',
  collaboration: 'Collaboration Time'
};

export const fieldPlaceholders = {
  firstName: 'Tim',
  company: 'ActivTrak',
  email: 'hello@thisistimsresume.com',
  address: '1501 South MoPac Expressway, Suite 155 Austin, TX 78746',
  year: '2025',
  workdaySpan: '8h 18m',
  screenTime: '7h 6m',
  productiveTime: '6h 33m',
  focusTime: '4h 12m',
  collaboration: '44m'
};

export const fieldHelpers = {
  workdaySpan: 'Format: 8h 18m or 8h (hours and minutes)',
  screenTime: 'Format: 7h 6m or 7h (hours and minutes)',
  productiveTime: 'Format: 6h 33m or 6h (hours and minutes)',
  focusTime: 'Format: 4h 12m or 4h (hours and minutes)',
  collaboration: 'Format: 44m or 1h 15m (minutes or hours)'
};

// Email subject line template
export const getSubjectLine = (company) => {
  return `${company}'s productivity benchmark comparison is ready`;
};

// Sender information
export const senderInfo = {
  name: 'Sarah Altemus',
  title: 'Productivity Lab Manager',
  fromAddress: 'lab@activtrak.com'
};
