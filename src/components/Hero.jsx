import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-white dark:bg-gray-900">
     
      
      <h1 className="text-3xl md:text-5xl font-bold dark:text-white">
        Hi, I'm <span className="text-purple-600">Lucky Mwende</span>
      </h1>
      <p className="text-gray-700 dark:text-gray-300 text-lg mt-2">
        A passionate Product Designer creating seamless user experiences.
      </p>
      <div className="mt-6 space-x-4">
        <a href="#portfolio" className="px-6 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700 transition">
          View Work
        </a>
        <a href="#contact" className="px-6 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-100 transition">
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
