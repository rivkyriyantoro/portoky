import { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="w-full bg-white dark:bg-gray-900 shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold dark:text-white">My Portfolio</h1>
          <div className="flex items-center gap-6">
            <Link to="about" smooth={true} className="nav-link dark:text-white">About</Link>
            <Link to="skills" smooth={true} className="nav-link dark:text-white">Skills</Link>
            <Link to="experience" smooth={true} className="nav-link dark:text-white">Experience</Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {darkMode ? 
                <FaSun className="text-yellow-400" /> : 
                <FaMoon className="text-gray-700" />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="text-center dark:text-white">
          <p className="mb-4">
            Hi! I'm a passionate beginner developer exploring the world of web development.
            I love creating user-friendly interfaces and learning new technologies.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="text-2xl hover:text-blue-500 dark:text-white">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-2xl hover:text-blue-500 dark:text-white">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git'].map((skill) => (
            <div key={skill} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold dark:text-white">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Junior Web Developer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Company Name • 2023 - Present</p>
            <p className="dark:text-white">
              Working on frontend development using React and modern web technologies.
              Collaborating with team members and learning best practices.
            </p>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Web Development Intern</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Another Company • 2022 - 2023</p>
            <p className="dark:text-white">
              Learned fundamentals of web development and assisted in various projects.
              Gained experience with HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;