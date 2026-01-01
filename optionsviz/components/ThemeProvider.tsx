'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'dark' | 'light' | 'system';

interface ThemeContextType {
  isDarkMode: boolean;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Get system preference
  const getSystemPreference = (): boolean => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  // Calculate actual dark mode based on theme mode
  const calculateDarkMode = (mode: ThemeMode): boolean => {
    if (mode === 'system') {
      return getSystemPreference();
    }
    return mode === 'dark';
  };

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem('themeMode') as ThemeMode | null;
    
    if (savedMode && ['dark', 'light', 'system'].includes(savedMode)) {
      setThemeMode(savedMode);
      setIsDarkMode(calculateDarkMode(savedMode));
    } else {
      // Default to system
      setThemeMode('system');
      setIsDarkMode(getSystemPreference());
    }
  }, []);

  // Listen to system theme changes when in system mode
  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (themeMode === 'system') {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themeMode, mounted]);

  // Save theme mode to localStorage and update dark mode
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('themeMode', themeMode);
      setIsDarkMode(calculateDarkMode(themeMode));
    }
  }, [themeMode, mounted]);

  // Cycle through themes: dark → light → system → dark
  const cycleTheme = () => {
    setThemeMode(prev => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'system';
      return 'dark';
    });
  };

  // Prevent flash of unstyled content
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, themeMode, setThemeMode, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}