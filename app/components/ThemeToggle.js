"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeToggle = () => {
  const [isOn, setIsOn] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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