import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md">
      <h1 className="text-xl font-bold dark:text-white">Portfolio</h1>
      <ul className="flex gap-6 text-gray-800 dark:text-gray-100">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <ThemeToggle />
      </ul>
    </nav>
  );
};

export default Navbar;
