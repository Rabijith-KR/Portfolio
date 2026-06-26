import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { personalData, skills } from '../data/portfolioData';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Circuit Board Background Pattern (CSS/SVG) */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10 L30 10 L30 30 L50 30 L50 10 L70 10 L70 50 L90 50 L90 70 L70 70 L70 90 L50 90 L50 70 L30 70 L30 90 L10 90 L10 70 L30 70 L30 50 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <circle cx="90" cy="50" r="2" fill="currentColor" />
              <circle cx="50" cy="90" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium w-max text-sm border border-primary/20">
              Welcome to my portfolio
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
              Hi, I'm 
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{personalData.name}</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300">
              {personalData.title}
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              {personalData.tagline}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="projects" smooth={true} duration={500}>
                <button className="btn-primary">
                  View Projects <FiArrowRight />
                </button>
              </Link>
              <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <FiDownload /> Download Resume
              </a>
              <Link to="contact" smooth={true} duration={500}>
                <button className="px-6 py-3 font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Contact Me
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Floating Badges & Image Placeholder */}
          <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
            {/* Image Placeholder */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-surface-light dark:border-surface-dark shadow-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 flex items-center justify-center z-10"
            >
              <img 
                src="/assets/profile/avatar.png" 
                alt={personalData.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://ui-avatars.com/api/?name=Rabijith+KR&size=400&background=0284c7&color=fff";
                }}
              />
            </motion.div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 left-0 md:left-10 bg-white dark:bg-slate-800 px-4 py-2 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 text-sm font-semibold text-primary z-20"
            >
              IoT
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-20 left-4 md:-left-4 bg-white dark:bg-slate-800 px-4 py-2 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 text-sm font-semibold text-accent z-20"
            >
              Embedded Systems
            </motion.div>

            <motion.div 
              animate={{ y: [-15, 15, -15] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-1/4 right-0 md:-right-8 bg-white dark:bg-slate-800 px-4 py-2 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 text-sm font-semibold text-blue-500 z-20"
            >
              Web Development
            </motion.div>

            <motion.div 
              animate={{ y: [15, -15, 15] }} 
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute bottom-10 right-10 bg-white dark:bg-slate-800 px-4 py-2 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 text-sm font-semibold text-teal-500 z-20"
            >
              ESP32 & JS
            </motion.div>
            
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-3/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
