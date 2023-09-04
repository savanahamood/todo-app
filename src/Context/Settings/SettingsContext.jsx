import React, { createContext, useContext, useState, useEffect } from 'react';
const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const defaultSettings = {
    numOfItem: 3,
    hideTheCompleted: true,
    defaultSort: 'difficulty',
  };

  //const [settings] = useState(defaultSettings);
  const [settings, setSettings] = useState(
    JSON.parse(localStorage.getItem('settings')) || defaultSettings
  );

  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(settings));
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => {
  return useContext(SettingsContext);
};