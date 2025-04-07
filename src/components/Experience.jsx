// src/components/Experience.jsx
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">Experience</h2>
        <ul className="space-y-6">
          <li className="bg-white dark:bg-gray-900 p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-purple-600">Frontend Developer.</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm"> march 2025 - Present</p>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Building modern UIs using React, Tailwind CSS, and improving performance and accessibility.
            </p>
          </li>
          {/* Add more experiences here */}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
