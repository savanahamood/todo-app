import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const defaultSettings = {
    numOfItem: 3,
    hideTheCompleted: true,
    defaultSort: 'difficulty',
  };

  const [settings] = useState(defaultSettings);

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => {
  return useContext(SettingsContext);
};