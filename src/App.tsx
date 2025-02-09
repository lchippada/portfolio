import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Github, Linkedin, Mail, ChevronDown, Code, Briefcase, User, Send, GraduationCap } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(true); // Changed to true for default dark theme
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  // Refs for scroll animations
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Reveal animations
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  // New function to simulate reloading on Home click
  const handleHomeClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} onHomeClick={handleHomeClick} />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }} />
        </div>
        
        <div className="text-center space-y-6 z-10">
          <div className="animate-rotateIn">
            <Code className="w-16 h-16 mx-auto mb-4 text-blue-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold animate-slideInLeft">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Lakshmi Manohar Chippada
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 animate-slideInRight">
            Professional Application Developer
          </p>
          <div className="flex justify-center space-x-4 animate-fadeIn" style={{ animationDelay: '1s' }}>
            <a href="#" className="transform hover:scale-125 transition-transform duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="transform hover:scale-125 transition-transform duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="transform hover:scale-125 transition-transform duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="min-h-screen py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8 reveal">
            <User className="w-12 h-12 text-blue-500 mr-4" />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="reveal">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
                alt="Profile"
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-4 reveal">
              <p className="text-lg">
                I'm a passionate developer with expertise in building modern web applications.
                With over 5 years of experience, I specialize in creating responsive and
                user-friendly interfaces using the latest technologies.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg transform hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="font-bold mb-2">Frontend</h3>
                  <p>React, Vue, Angular</p>
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg transform hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="font-bold mb-2">Backend</h3>
                  <p>Node.js, Python, Java</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen py-20 px-4 relative bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8 reveal">
            <GraduationCap className="w-12 h-12 text-blue-500 mr-4" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg reveal transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-bold mb-2">Master's in Computer Science</h3>
              <p>Binghamton University - SUNY, 2023 - 2025</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">GPA: 3.5/4.0</p>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg reveal transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-bold mb-2">Bachelor of Technology in Computer Science</h3>
              <p>Gandhi Institute of Technology and Management, 2016 - 2020</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">GPA: 3.4/4.0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 px-4 relative bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8 reveal">
            <Briefcase className="w-12 h-12 text-blue-500 mr-4" />
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>
          <div className="space-y-8">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg reveal transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-bold mb-2">Professional 1 Application Delivery</h3>
              <p className="text-blue-500">DXC Technology</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Jan 2021 - Aug 2023</p>
              <ul className="list-disc ml-6 mt-4 space-y-2">
                <li>Customized TREX website and built reports using SOA services</li>
                <li>Configured AWC, Teamcenter Unified (11.2.3 and 13.2)</li>
                <li>Integrated Teamcenter to CAD software</li>
                <li>Worked on SpringMVC for adding additional functionalities</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg reveal transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-bold mb-2">Software Intern</h3>
              <p className="text-blue-500">Marolix Technology Solutions</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">May 2019 - June 2019</p>
              <ul className="list-disc ml-6 mt-4 space-y-2">
                <li>Worked on SR Amma Charitable Trust Website</li>
                <li>Enhanced website responsiveness using CSS Grid and Flex</li>
                <li>Added features using React.js and JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-800 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12 reveal">
            <Briefcase className="w-12 h-12 text-blue-500 mr-4" />
            <h2 className="text-4xl font-bold">My Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="reveal bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden group"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-151030${i}349-e2af-4989-a5c2-9ce430b0d8f${i}?auto=format&fit=crop&q=80`}
                    alt={`Project ${i}`}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">Project {i}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A brief description of project {i} and its key features.
                  </p>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                      Node.js
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-4 relative bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8 reveal">
            <Code className="w-12 h-12 text-blue-500 mr-4" />
            <h2 className="text-4xl font-bold">Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg reveal">
              <h3 className="font-bold mb-2">Programming Languages</h3>
              <p>Java, Python, C/C++, PHP, HTML, CSS, JavaScript</p>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg reveal">
              <h3 className="font-bold mb-2">Databases</h3>
              <p>Oracle, MySQL, MongoDB</p>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg reveal">
              <h3 className="font-bold mb-2">Tools & IDEs</h3>
              <p>Visual Studio, WinSCP, Eclipse, AWC, Teamcenter</p>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg reveal">
              <h3 className="font-bold mb-2">Certifications</h3>
              <p>Teamcenter AWC, AZURE (Az-900), AZURE DevOps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="min-h-screen py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12 reveal">
            <Send className="w-12 h-12 text-blue-500 mr-4" />
            <h2 className="text-4xl font-bold">Get in Touch</h2>
          </div>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="reveal w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transform hover:-translate-y-1 transition-transform duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="reveal w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transform hover:-translate-y-1 transition-transform duration-300"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={6}
              className="reveal w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transform hover:-translate-y-1 transition-transform duration-300"
            ></textarea>
            <button
              type="submit"
              className="reveal w-full md:w-auto px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;