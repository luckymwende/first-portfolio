import React from 'react';

const projects = [
  {
    title: "My Portfolio",
    image: "/assets/project1.jpg",
    description: "A simple portfolio using React,Javascript and TailwindCss.",
    link: "#"
  },
  {
    title: "Mental Health App",
    image: "/assets/project2.jpg",
    description: "An interactive mental health web application.",
    link: "#"
  },
  {
    title: "Health Tracker",
    image: "/assets/project3.jpg",
    description: "A wellness tracking mobile-first app.",
    link: "#"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">My Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{project.description}</p>
                <a 
                  href={project.link} 
                  className="inline-block mt-4 text-purple-600 hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
