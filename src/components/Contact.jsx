import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}, your message was sent!`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Let's Connect</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          ></textarea>
          <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
