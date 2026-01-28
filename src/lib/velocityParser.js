// Velocity Script Parser for Email Demo
// Replicates Marketo's Velocity logic for productivity benchmarks

/**
 * Parse time string (e.g., "8h 18m" or "44m") into minutes
 */
export function parseTimeToMinutes(timeString) {
  if (!timeString || timeString.trim() === '') return null;
  
  const hourMatch = timeString.match(/(\d+)h/);
  const minuteMatch = timeString.match(/(\d+)m/);
  
  const hours = hourMatch ? parseInt(hourMatch[1]) : 0;
  const minutes = minuteMatch ? parseInt(minuteMatch[1]) : 0;
  
  return (hours * 60) + minutes;
}

/**
 * Parse time string into decimal hours (for calculations)
 */
export function parseTimeToHours(timeString) {
  if (!timeString || timeString.trim() === '') return null;
  
  const hourMatch = timeString.match(/(\d+)h/);
  const minuteMatch = timeString.match(/(\d+)m/);
  
  const hours = hourMatch ? parseInt(hourMatch[1]) : 0;
  const minutes = minuteMatch ? parseInt(minuteMatch[1]) : 0;
  
  return hours + (minutes / 60.0);
}

/**
 * Process Collaboration Time (in minutes)
 * Benchmark: 44 minutes
 * Healthy range: 30-60 minutes
 */
export function processCollaborationTime(timeString, deltaString) {
  const minutes = parseTimeToMinutes(timeString);
  
  if (minutes === null) return null;
  
  if (minutes >= 30 && minutes <= 60) {
    return {
      status: 'success',
      color: '#2ED4B5',
      title: 'Congrats!',
      message: `Your average of ${deltaString} of daily collaboration time closely matches the benchmark (44 minutes) and falls within healthy parameters (30-60 minutes). This indicates efficient meetings and asynchronous communication, but could also suggest opportunities to increase team connection depending on your work model.`
    };
  } else if (minutes > 60 && minutes <= 90) {
    return {
      status: 'warning',
      color: '#FBD13E',
      title: 'Keep an eye on this.',
      message: `Daily collaboration time of ${deltaString} is higher than both the benchmark (44m) and healthy range (30 minutes-1 hour). While collaboration is valuable, meeting time can fragment focus and reduce individual productivity. Consider auditing meetings and agendas, or finding alternatives for routine updates.`
    };
  } else if (minutes >= 20 && minutes < 30) {
    return {
      status: 'warning',
      color: '#FBD13E',
      title: 'Keep an eye on this.',
      message: `At ${deltaString} of daily collaboration time, your teams interact slightly less than the benchmark (44 minutes) and optimal range (30 minutes-1 hour). This could indicate efficient asynchronous workflows. Or it may signal insufficient team coordination, knowledge sharing and relationship building. Assess whether collaboration levels support team cohesion and innovation.`
    };
  } else if (minutes < 20) {
    return {
      status: 'action',
      color: '#FF864B',
      title: 'This may call for action.',
      message: `Your teams spend only ${deltaString} in daily collaboration time, far less than the benchmark (44 minutes) and healthy range (30 minutes-1 hour). While asynchronous work is valuable, this lack of interaction may hinder coordination, innovation, relationship building and knowledge sharing. We recommend investigating potential barriers such as time zone challenges, technology issues or cultural concerns.`
    };
  } else {
    return {
      status: 'action',
      color: '#FF864B',
      title: 'This may call for action.',
      message: `Your teams spend ${deltaString} collaborating daily, much longer than the benchmark (44 minutes) and healthy limits (30 minutes-1 hour). Too many meetings and Slack or Teams conversations impact focus time and individual productivity. As an immediate action, look for opportunities to reduce the number of meetings and protect focus time. Consider implementing meeting-free days, lowering the number of standing meetings, consolidating recurring syncs and establishing clear protocols for asynchronous communication.`
    };
  }
}

/**
 * Process Focus Time (in hours)
 * Benchmark: 4 hours 12 minutes (4.2 hours)
 * Healthy range: 3.5-5 hours
 */
export function processFocusTime(timeString, deltaString) {
  const hours = parseTimeToHours(timeString);
  
  if (hours === null) return null;
  
  if (hours >= 3.5 && hours <= 5) {
    return {
      status: 'success',
      color: '#2ED4B5',
      title: 'Congrats!',
      message: `At ${deltaString} of daily focus time, your workforce closely aligns with the benchmark (4 hours 12 minutes) and falls within the optimal range (3 hours 30 minutes-5 hours). This indicates your teams maintain healthy concentration levels throughout the day and protect deep work time.`
    };
  } else if (hours >= 3 && hours < 3.5) {
    return {
      status: 'warning',
      color: '#FBD13E',
      title: 'Keep an eye on this.',
      message: `Daily focus time of ${deltaString} represents an opportunity for improvement. It falls below the benchmark (4 hours 12 minutes) and optimal range (3 hours 30 minutes-5 hours), and may indicate frequent interruptions or too many meetings. Consider strategies like meeting-free blocks, focus hour policies or communication norms to protect deep work.`
    };
  } else if (hours > 5 && hours <= 5.5) {
    return {
      status: 'warning',
      color: '#FBD13E',
      title: 'Keep an eye on this.',
      message: `At ${deltaString} daily, your average focus time exceeds the benchmark (4 hours 12 minutes) and optimal range (3 hours 30 minutes-5 hours). While uninterrupted focus time is typically good, some level of context switching and collaboration is expected throughout the day. If this number is a surprise, it may indicate inefficient processes, above-average non-digital work or employees struggling with assigned tasks.`
    };
  } else if (hours < 3) {
    return {
      status: 'action',
      color: '#FF864B',
      title: 'This may call for action.',
      message: `Daily focus time of ${deltaString} is significantly lower than the benchmark (4 hours 12 minutes) and what's considered a healthy range (3 hours 30 minutes-5 hours). This may indicate severe workday fragmentation that impairs productivity, quality and employee satisfaction. Taking steps to reduce interruptions, restructure meeting schedules and establish communication protocols can give people more uninterrupted time to focus on important work.`
    };
  } else {
    return {
      status: 'action',
      color: '#FF864B',
      title: 'This may call for action.',
      message: `Daily focus time of ${deltaString} significantly exceeds both the productivity benchmark (4 hours 12 minutes) and healthy levels (3 hours 30 minutes-5 hours). This may indicate inefficient process flows, a high volume of non-digital work or employees struggling with assigned tasks. Prioritize initiatives to identify inefficient processes and give employees support where needed.`
    };
  }
}

/**
 * Process Productive Time (in hours)
 * Benchmark: 6 hours 33 minutes (6.55 hours)
 * Healthy range: 5.5-7.5 hours
 */
export function processProductiveTime(timeString, deltaString) {
  const hours = parseTimeToHours(timeString);
  
  if (hours === null) return null;
  
  if (hours >= 5.5 && hours <= 7.5) {
    return {
      status: 'success',
      color: '#2ED4B5',
      title: 'Congrats!',
      message: `Your ${deltaString} average of daily productive time is closely aligned with the benchmark of 6 hours 33 minutes and falls within the recommended healthy range (5 hours 30 minutes-7 hours 30 minutes). Teams that operate in this range typically have effective time management and sustainable work practices.`
    };
  } else if (hours > 7.5 && hours <= 8.5) {
    return {
      status: 'warning',
      color: '#FBD13E',
      title: 'Keep an eye on this.',
      message: `Your teams log ${deltaString} of daily productive time, which is significantly more than the benchmark (6 hours 33 minutes) and optimal levels (5 hours 30 minutes-7 hours 30 minutes). This strong output can boost productivity in the short term, but use caution: Sustained high-intensity productive work above 7 hours 30 minutes can lead to burnout and diminished long-term performance. Consider whether teams have adequate capacity and support.`
    };
  } else if (hours >= 4.5 && hours < 5.5) {
    return {
      status: 'warning',
      color: '#FBD13E',
      title: 'Keep an eye on this.',
      message: `At ${deltaString} of daily productive time, your teams fall below the benchmark (6 hours 33 minutes) and optimal productivity (5 hours 30 minutes-7 hours 30 minutes) time ranges. This may indicate increased disruptions, administrative overhead or barriers to focused work. Explore potential causes such as excessive meetings, tool friction or gaps in resources that may limit productivity.`
    };
  } else if (hours < 4.5) {
    return {
      status: 'action',
      color: '#FF864B',
      title: 'This may call for action.',
      message: `An average of ${deltaString} daily productive time falls notably below the benchmark (6 hours 30 minutes) and optimal range (5 hours 30 minutes-7 hours 30 minutes) and may indicate capacity gaps to investigate. Look out for excessive disruptions, tool friction, unclear priorities or capacity constraints — and explore potential barriers to productivity such as meeting overload, context switching or resource gaps.`
    };
  } else {
    return {
      status: 'action',
      color: '#FF864B',
      title: 'This may call for action.',
      message: `Your ${deltaString} average of daily productive time could represent an overutilization risk. Productive time significantly higher than the benchmark (6 hours 30 minutes) and healthy thresholds (5 hours 30 minutes-7 hours 30 minutes) suggest the type of sustained high-intensity work that can lead to burnout, disengagement and turnover. To combat this issue, review workload distribution and consider whether teams have the right capacity and support.`
    };
  }
}

/**
 * Process Total Time / Screen Time (in hours)
 * Benchmark: 7 hours 6 minutes (7.1 hours)
 * Healthy range: 6-8 hours
 */
export function processTotalTime(timeString, deltaString) {
  const hours = parseTimeToHours(timeString);
  
  if (hours === null) return null;
  
  if (hours >= 6 && hours <= 8) {
    return {
      status: 'success',
      color: '#2ED4B5',
      title: 'Well done!',
      message: `Your ${deltaString} average of daily screen time is closely aligned with the benchmark (7 hours 6 minutes) and well within the optimal range (6-8 hours). Teams in this range balance digital productivity with screen time and are less likely to experience significant disengagement.`
    };
  } else if (hours > 8 && hours <= 9) {
    return {
      status: 'warning',
      color: '#FBD13E',
      title: 'Keep an eye on this.',
      message: `With an ${deltaString} average of daily screen time, monitoring for screen fatigue is a good next step. Extended screen exposure (8 hours or more) can contribute to fatigue, eye strain and lower well-being. Consider encouraging breaks, walking meetings or offline work blocks to avoid burnout and turnover.`
    };
  } else if (hours >= 5 && hours < 6) {
    return {
      status: 'warning',
      color: '#FBD13E',
      title: 'Keep an eye on this.',
      message: `At ${deltaString} daily, your average screen time is notably lower than the productivity benchmark (7 hours 6 minutes) and approaching low thresholds (optimal: 6-8 hours). If your team does a lot of work offline, this may be appropriate. If not, it could indicate disengagement, technology challenges or unused capacity. Look at Schedule Adherence to verify this number aligns with role expectations.`
    };
  } else if (hours < 5) {
    return {
      status: 'action',
      color: '#FF864B',
      title: 'This may call for action.',
      message: `Your teams averaged ${deltaString} of daily screen time in 2025, substantially less than the benchmark (7 hours 6 minutes) and typical work requirements (6-8 hours). Unless your roles involve extensive offline work, this pattern may indicate disengagement, technology issues, unused capacity or hybrid work challenges. This is a good time to investigate potential barriers to productivity.`
    };
  } else {
    return {
      status: 'action',
      color: '#FF864B',
      title: 'This may call for action.',
      message: `Your teams log ${deltaString} of daily screen time, significantly more than the benchmark (7 hours 6 minutes) and healthy thresholds (6-8 hours). Prolonged screen time at this level is associated with digital fatigue, lower well-being and burnout. Review workload intensity, meeting culture and opportunities for offline collaboration or breaks.`
    };
  }
}

/**
 * Process Workday Span (in hours)
 * Benchmark: 8 hours 18 minutes (8.3 hours)
 * Healthy range: 7.5-9 hours
 */
export function processWorkdaySpan(timeString, deltaString) {
  const hours = parseTimeToHours(timeString);
  
  if (hours === null) return null;
  
  if (hours >= 7.5 && hours <= 9) {
    return {
      status: 'success',
      color: '#2ED4B5',
      title: 'Congrats!',
      message: `An average workday span of ${deltaString} suggests consistent, sustainable work patterns without signs of overextension or underutilization, and falls within healthy parameters (7 hours 30 minutes-9 hours). Keep an eye out for longer or shorter days as we head into 2026, but you're on solid footing for 2025.`
    };
  } else if (hours > 9 && hours <= 10) {
    return {
      status: 'warning',
      color: '#FBD13E',
      title: 'Keep an eye on this.',
      message: `An average workday span of ${deltaString} exceeds both the optimal range (7 hours 30 minutes-9 hours) and benchmark (8 hours 18 minutes). While productivity is good, extended workdays of 9 hours or more often signal burnout risk and can lead to turnover. If you'd like to lower your risk, consider reviewing workload balance and team capacity.`
    };
  } else if (hours < 7.5) {
    return {
      status: 'action',
      color: '#FF864B',
      title: 'This may call for action.',
      message: `An average workday span of ${deltaString} is substantially shorter than the benchmark (8 hours 18 minutes) and well outside the recommended healthy range (7 hours 30 minutes-9 hours). Over time, decreased work hours are strong indicators of disengagement and underutilization. If these numbers surprise you, look at Schedule Adherence or Working Hours to see where disconnects between expectations and performance may exist.`
    };
  } else {
    return {
      status: 'action',
      color: '#FF864B',
      title: 'This may call for action.',
      message: `An average workday span of ${deltaString} is well outside the recommended healthy range (7 hours 30 minutes-9 hours) and substantially longer than the benchmark (8 hours 18 minutes). Over time, extended work hours are strong predictors of burnout, decreased engagement and turnover. Look at headcount and working hours to see how you might address this.`
    };
  }
}

/**
 * Process first name with default fallback
 */
export function processFirstName(firstName) {
  if (!firstName || firstName.trim() === '' || firstName === 'DefaultFirstName') {
    return 'there';
  }
  return firstName.trim();
}

/**
 * Process company name with default fallback
 */
export function processCompanyName(companyName) {
  if (!companyName || companyName.trim() === '' || companyName === 'DefaultCompany') {
    return 'Your organization';
  }
  return companyName.trim();
}
