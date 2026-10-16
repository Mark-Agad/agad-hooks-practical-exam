import { createContext, useState, useContext } from 'react';

export const PreferencesContext = createContext(null);

export function PreferencesProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState(16);

  const value = { theme, fontSize, setTheme, setFontSize };

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);

  if (context === null) {
    throw new Error('usePreferences must be used inside a PreferencesProvider');
  }

  return context;
}