"use client";
import React from "react";

const DEFAULT_SOUND_ENABLED = {
  soundEnabled: true,
  setSoundEnabled: () => {},
};

export const SoundEnabledContext = React.createContext(DEFAULT_SOUND_ENABLED);

export function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  return (
    <SoundEnabledContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundEnabledContext.Provider>
  );
}
