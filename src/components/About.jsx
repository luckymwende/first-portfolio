import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">About Me</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          I'm a product designer with 3+ years of experience in UX/UI. I help companies bring ideas to life with clean design and intuitive interfaces.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-gray-700 dark:text-gray-200">
          <div className="p-4 border dark:border-gray-700 rounded">
            <h3 className="text-xl font-bold">3+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="p-4 border dark:border-gray-700 rounded">
            <h3 className="text-xl font-bold">20+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="p-4 border dark:border-gray-700 rounded">
            <h3 className="text-xl font-bold">30+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
