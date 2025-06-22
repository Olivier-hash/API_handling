import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{ background: dark ? '#333' : '#ccc' }}>
      <button onClick={toggleTheme}>
        Switch to {dark ? 'Light' : 'Dark'} Mode
      </button>
    </nav>
  );
};

export default Navbar;
