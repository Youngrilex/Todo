import React, { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // On mount, check the current theme
    const root = window.document.documentElement;
    const initialDarkMode = root.classList.contains('dark');
    setIsDarkMode(initialDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    root.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-[#5b69c7] dark:bg-[#b3c2f4] rounded-xl text-white dark:text-black focus:outline-none transition-colors duration-300 font-semibold"
    >
      {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
