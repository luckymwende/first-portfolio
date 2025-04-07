import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-center bg-gray-100 dark:bg-gray-900 dark:text-white">
      <p className="text-sm">
        © {new Date().getFullYear()} Lucky Mutua. All rights reserved.
      </p>
      <div className="flex justify-center mt-2 gap-4 text-gray-600 dark:text-gray-300">
        <a href="#" className="hover:text-purple-600">LinkedIn</a>
        <a href="#" className="hover:text-purple-600">GitHub</a>
        <a href="#" className="hover:text-purple-600">Dribbble</a>
      </div>
    </footer>
  );
};

export default Footer;
