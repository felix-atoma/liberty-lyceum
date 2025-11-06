import React, { createContext, useState, useContext, useEffect } from 'react';

const AccessibilityContext = createContext();

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12));
  };

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
  };

  const resetAccessibility = () => {
    setFontSize(16);
    setHighContrast(false);
  };

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    return () => {
      document.documentElement.style.fontSize = '';
      document.documentElement.classList.remove('high-contrast');
    };
  }, [fontSize, highContrast]);

  const value = {
    fontSize,
    highContrast,
    isSearchOpen,
    searchQuery,
    increaseFontSize,
    decreaseFontSize,
    toggleHighContrast,
    setIsSearchOpen,
    setSearchQuery,
    resetAccessibility
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};