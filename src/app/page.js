import React from 'react';
import { Code, Coffee, Laptop, Server, Database, Cloud } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-6">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Developer Ankit</h1>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#tech-stack" className="hover:underline">Tech Stack</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Next.js Developer & SaaS Enthusiast</h2>
          <p className="text-xl text-gray-600">Turning ideas into scalable web applications</p>
        </section>

        <section id="about" className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <div className="flex items-center space-x-8">
            <div className="flex-1">
              <p className="text-gray-700 mb-4">
                I'm a passionate Next.js developer with a love for building innovative SaaS products.
                With expertise in React, TypeScript, and cloud technologies, I create efficient and
                scalable web applications that solve real-world problems.
              </p>
            </div>
            <div className="flex space-x-4">
              <Code size={48} className="text-blue-600" />
              <Coffee size={48} className="text-blue-600" />
              <Laptop size={48} className="text-blue-600" />
            </div>
          </div>
        </section>

        <section id="tech-stack" className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">My Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Next.js', icon: <Code size={48} /> },
              { name: 'React', icon: <Code size={48} /> },
              { name: 'TypeScript', icon: <Code size={48} /> },
              { name: 'Node.js', icon: <Server size={48} /> },
              { name: 'MongoDB', icon: <Database size={48} /> },
              { name: 'AWS', icon: <Cloud size={48} /> },
            ].map((tech) => (
              <div key={tech.name} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <div className="text-blue-600 mb-2">{tech.icon}</div>
                <h4 className="text-xl font-semibold">{tech.name}</h4>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-700 mb-4">
            Interested in collaborating or have a project in mind? Let's connect!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </a>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Developer Ankit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;