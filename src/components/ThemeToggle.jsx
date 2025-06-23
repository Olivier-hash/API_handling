// src/components/ThemeToggle.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '0.5rem 1rem',
        margin: '1rem',
        backgroundColor: dark ? '#444' : '#ddd',
        color: dark ? '#fff' : '#000',
        border: 'none',
        borderRadius: '5px'
      }}
    >
      Toggle to {dark ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;
