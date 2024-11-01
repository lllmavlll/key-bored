"use client";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeToggle = () => {
  const [isOn, setIsOn] = useState(false);
  const [theme, setTheme] = useState('light'); // Start with a default theme

  useEffect(() => {
    // Check localStorage only after the component has mounted on the client
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }
  }, []); // Run only once on mount

  useEffect(() => {
    // Apply theme and save to localStorage whenever `theme` changes
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setIsOn(!isOn)
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="p-2">
      {theme === 'light' ?
        <MoonIcon className="dark:text-white w-6 h-6" />:
        <SunIcon className="dark:text-white w-6 h-6 " /> 
        }
    </button>

  );
};

export default ThemeToggle;