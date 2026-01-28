// Process velocity tokens and render email template

export function processVelocityTokens(htmlTemplate, formData) {
  let processed = htmlTemplate;
  
  // Process {{my.replacefirstname}}
  const firstName = formData.firstName || 'there';
  processed = processed.replace(/\{\{my\.replacefirstname\}\}/g, firstName);
  
  // Process {{my.replacecompany}}
  const company = formData.companyName || 'Your organization';
  processed = processed.replace(/\{\{my\.replacecompany\}\}/g, company);
  
  // Process {{my.CurrentYear}}
  const year = formData.year || '2025';
  processed = processed.replace(/\{\{my\.CurrentYear\}\}/g, year);
  
  // Process {{my.currentaddress}}
  const address = formData.address || '1501 South MoPac Expressway, Suite 155 Austin, TX 78746';
  processed = processed.replace(/\{\{my\.currentaddress\}\}/g, address);
  
  // Process lead fields for 2025 metrics
  processed = processed.replace(/\{\{lead\.Workday Span 2025\}\}/g, formData.workdaySpan || '8h 18m');
  processed = processed.replace(/\{\{lead\.Total Time 2025\}\}/g, formData.totalTime || '7h 6m');
  processed = processed.replace(/\{\{lead\.Productive Time 2025\}\}/g, formData.productiveTime || '6h 33m');
  processed = processed.replace(/\{\{lead\.Focus Time 2025\}\}/g, formData.focusTime || '4h 12m');
  processed = processed.replace(/\{\{lead\.Collaboration Time 2025\}\}/g, formData.collaborationTime || '44m');
  
  // Process 2024 default values
  processed = processed.replace(/\{\{lead\.Workday Span 2024:default=--\}\}/g, '8h 18m');
  processed = processed.replace(/\{\{lead\.Total Time 2024:default=--\}\}/g, '7h 6m');
  processed = processed.replace(/\{\{lead\.Productive Time 2024:default=--\}\}/g, '6h 33m');
  processed = processed.replace(/\{\{lead\.Focus Time 2024:default=--\}\}/g, '4h 12m');
  processed = processed.replace(/\{\{lead\.Collaboration Time 2024:default=--\}\}/g, '44m');
  
  // Process content tokens
  processed = processed.replace(/\{\{my\.Collaboration Time Content\}\}/g, 
    generateCollaborationContent(formData.collaborationTime));
  processed = processed.replace(/\{\{my\.Focus Time Content\}\}/g, 
    generateFocusContent(formData.focusTime));
  processed = processed.replace(/\{\{my\.Productive Time Content\}\}/g, 
    generateProductiveContent(formData.productiveTime));
  processed = processed.replace(/\{\{my\.Total Time Content\}\}/g, 
    generateTotalContent(formData.totalTime));
  processed = processed.replace(/\{\{my\.Workday Span Content\}\}/g, 
    generateWorkdayContent(formData.workdaySpan));
  
  return processed;
}

function parseTimeToMinutes(timeString) {
  if (!timeString || timeString.trim() === '') return null;
  
  const hourMatch = timeString.match(/(\d+)h/);
  const minuteMatch = timeString.match(/(\d+)m/);
  
  const hours = hourMatch ? parseInt(hourMatch[1]) : 0;
  const minutes = minuteMatch ? parseInt(minuteMatch[1]) : 0;
  
  return (hours * 60) + minutes;
}

function parseTimeToHours(timeString) {
  if (!timeString || timeString.trim() === '') return null;
  
  const hourMatch = timeString.match(/(\d+)h/);
  const minuteMatch = timeString.match(/(\d+)m/);
  
  const hours = hourMatch ? parseInt(hourMatch[1]) : 0;
  const minutes = minuteMatch ? parseInt(minuteMatch[1]) : 0;
  
  return hours + (minutes / 60.0);
}

function generateCollaborationContent(timeString) {
  const minutes = parseTimeToMinutes(timeString);
  
  if (minutes === null) return '<p>Please enter collaboration time.</p>';
  
  if (minutes >= 30 && minutes <= 60) {
    return `<p><strong style="color: #2ED4B5;">Congrats!</strong> Your average of ${timeString} of daily collaboration time closely matches the benchmark (44 minutes) and falls within healthy parameters (30-60 minutes). This indicates efficient meetings and asynchronous communication, but could also suggest opportunities to increase team connection depending on your work model.</p>`;
  } else if (minutes > 60 && minutes <= 90) {
    return `<p><strong style="color: #FBD13E;">Keep an eye on this.</strong> Daily collaboration time of ${timeString} is higher than both the benchmark (44m) and healthy range (30 minutes-1 hour). While collaboration is valuable, meeting time can fragment focus and reduce individual productivity. Consider auditing meetings and agendas, or finding alternatives for routine updates.</p>`;
  } else if (minutes >= 20 && minutes < 30) {
    return `<p><strong style="color: #FBD13E;">Keep an eye on this.</strong> At ${timeString} of daily collaboration time, your teams interact slightly less than the benchmark (44 minutes) and optimal range (30 minutes-1 hour). This could indicate efficient asynchronous workflows. Or it may signal insufficient team coordination, knowledge sharing and relationship building.</p>`;
  } else if (minutes < 20) {
    return `<p><strong style="color: #FF864B;">This may call for action.</strong> Your teams spend only ${timeString} in daily collaboration time, far less than the benchmark (44 minutes) and healthy range (30 minutes-1 hour). While asynchronous work is valuable, this lack of interaction may hinder coordination, innovation, relationship building and knowledge sharing.</p>`;
  } else {
    return `<p><strong style="color: #FF864B;">This may call for action.</strong> Your teams spend ${timeString} collaborating daily, much longer than the benchmark (44 minutes) and healthy limits (30 minutes-1 hour). Too many meetings and conversations impact focus time and individual productivity.</p>`;
  }
}

function generateFocusContent(timeString) {
  const hours = parseTimeToHours(timeString);
  
  if (hours === null) return '<p>Please enter focus time.</p>';
  
  if (hours >= 3.5 && hours <= 5) {
    return `<p><strong style="color: #2ED4B5;">Congrats!</strong> At ${timeString} of daily focus time, your workforce closely aligns with the benchmark (4 hours 12 minutes) and falls within the optimal range (3 hours 30 minutes-5 hours). This indicates your teams maintain healthy concentration levels throughout the day.</p>`;
  } else if (hours >= 3 && hours < 3.5) {
    return `<p><strong style="color: #FBD13E;">Keep an eye on this.</strong> Daily focus time of ${timeString} represents an opportunity for improvement. It falls below the benchmark (4 hours 12 minutes) and optimal range (3 hours 30 minutes-5 hours).</p>`;
  } else if (hours > 5 && hours <= 5.5) {
    return `<p><strong style="color: #FBD13E;">Keep an eye on this.</strong> At ${timeString} daily, your average focus time exceeds the benchmark (4 hours 12 minutes) and optimal range (3 hours 30 minutes-5 hours). While uninterrupted focus time is typically good, some level of context switching is expected.</p>`;
  } else if (hours < 3) {
    return `<p><strong style="color: #FF864B;">This may call for action.</strong> Daily focus time of ${timeString} is significantly lower than the benchmark (4 hours 12 minutes) and healthy range (3 hours 30 minutes-5 hours). This may indicate severe workday fragmentation.</p>`;
  } else {
    return `<p><strong style="color: #FF864B;">This may call for action.</strong> Daily focus time of ${timeString} significantly exceeds both the benchmark (4 hours 12 minutes) and healthy levels (3 hours 30 minutes-5 hours). This may indicate inefficient process flows.</p>`;
  }
}

function generateProductiveContent(timeString) {
  const hours = parseTimeToHours(timeString);
  
  if (hours === null) return '<p>Please enter productive time.</p>';
  
  if (hours >= 5.5 && hours <= 7.5) {
    return `<p><strong style="color: #2ED4B5;">Congrats!</strong> Your ${timeString} average of daily productive time is closely aligned with the benchmark of 6 hours 33 minutes and falls within the recommended healthy range (5 hours 30 minutes-7 hours 30 minutes).</p>`;
  } else if (hours > 7.5 && hours <= 8.5) {
    return `<p><strong style="color: #FBD13E;">Keep an eye on this.</strong> Your teams log ${timeString} of daily productive time, significantly more than the benchmark (6 hours 33 minutes) and optimal levels (5 hours 30 minutes-7 hours 30 minutes).</p>`;
  } else if (hours >= 4.5 && hours < 5.5) {
    return `<p><strong style="color: #FBD13E;">Keep an eye on this.</strong> At ${timeString} of daily productive time, your teams fall below the benchmark (6 hours 33 minutes) and optimal productivity time ranges.</p>`;
  } else if (hours < 4.5) {
    return `<p><strong style="color: #FF864B;">This may call for action.</strong> An average of ${timeString} daily productive time falls notably below the benchmark (6 hours 30 minutes) and optimal range (5 hours 30 minutes-7 hours 30 minutes).</p>`;
  } else {
    return `<p><strong style="color: #FF864B;">This may call for action.</strong> Your ${timeString} average of daily productive time could represent an overutilization risk. Sustained high-intensity work can lead to burnout.</p>`;
  }
}

function generateTotalContent(timeString) {
  const hours = parseTimeToHours(timeString);
  
  if (hours === null) return '<p>Please enter total screen time.</p>';
  
  if (hours >= 6 && hours <= 8) {
    return `<p><strong style="color: #2ED4B5;">Well done!</strong> Your ${timeString} average of daily screen time is closely aligned with the benchmark (7 hours 6 minutes) and well within the optimal range (6-8 hours).</p>`;
  } else if (hours > 8 && hours <= 9) {
    return `<p><strong style="color: #FBD13E;">Keep an eye on this.</strong> With an ${timeString} average of daily screen time, monitoring for screen fatigue is a good next step. Extended screen exposure can contribute to fatigue.</p>`;
  } else if (hours >= 5 && hours < 6) {
    return `<p><strong style="color: #FBD13E;">Keep an eye on this.</strong> At ${timeString} daily, your average screen time is notably lower than the productivity benchmark (7 hours 6 minutes).</p>`;
  } else if (hours < 5) {
    return `<p><strong style="color: #FF864B;">This may call for action.</strong> Your teams averaged ${timeString} of daily screen time, substantially less than the benchmark (7 hours 6 minutes) and typical work requirements (6-8 hours).</p>`;
  } else {
    return `<p><strong style="color: #FF864B;">This may call for action.</strong> Your teams log ${timeString} of daily screen time, significantly more than the benchmark (7 hours 6 minutes) and healthy thresholds (6-8 hours).</p>`;
  }
}

function generateWorkdayContent(timeString) {
  const hours = parseTimeToHours(timeString);
  
  if (hours === null) return '<p>Please enter workday span.</p>';
  
  if (hours >= 7.5 && hours <= 9) {
    return `<p><strong style="color: #2ED4B5;">Congrats!</strong> An average workday span of ${timeString} suggests consistent, sustainable work patterns without signs of overextension or underutilization.</p>`;
  } else if (hours > 9 && hours <= 10) {
    return `<p><strong style="color: #FBD13E;">Keep an eye on this.</strong> An average workday span of ${timeString} exceeds both the optimal range (7 hours 30 minutes-9 hours) and benchmark (8 hours 18 minutes).</p>`;
  } else if (hours < 7.5) {
    return `<p><strong style="color: #FF864B;">This may call for action.</strong> An average workday span of ${timeString} is substantially shorter than the benchmark (8 hours 18 minutes) and outside the recommended range (7 hours 30 minutes-9 hours).</p>`;
  } else {
    return `<p><strong style="color: #FF864B;">This may call for action.</strong> An average workday span of ${timeString} is well outside the recommended range (7 hours 30 minutes-9 hours) and substantially longer than the benchmark (8 hours 18 minutes).</p>`;
  }
}

export const defaultFormData = {
  firstName: 'Tim',
  companyName: 'ActivTrak',
  year: '2025',
  address: '1501 South MoPac Expressway, Suite 155 Austin, TX 78746',
  collaborationTime: '44m',
  focusTime: '4h 12m',
  productiveTime: '6h 33m',
  totalTime: '7h 6m',
  workdaySpan: '8h 18m'
};

export const inboxFields = {
  from: 'Sarah Altemus',
  fromAddress: 'lab@activtrak.com',
  subject: (company) => `${company}'s productivity benchmark comparison is ready`,
  preheader: 'See what to watch (and what to celebrate!) ahead of 2026'
};
