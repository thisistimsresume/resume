// Theme Management Utility

export const getTheme = () => {
  if (typeof window === 'undefined') return 'light';
  
  // Check localStorage first
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  
  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  return 'light';
};

export const setTheme = (theme) => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('theme', theme);
  
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  
  // Dispatch custom event for components to listen to
  window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
};

export const toggleTheme = () => {
  const current = getTheme();
  const next = current === 'light' ? 'dark' : 'light';
  setTheme(next);
  return next;
};

// Initialize theme on page load
export const initializeTheme = () => {
  if (typeof window === 'undefined') return;
  
  const theme = getTheme();
  setTheme(theme);
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const stored = localStorage.getItem('theme');
    if (!stored) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
};
