import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-2">
              {personalData.name}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {personalData.subtitle}
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href={personalData.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-primary transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a 
              href={personalData.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-primary transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a 
              href={`mailto:${personalData.email}`}
              className="text-slate-500 hover:text-primary transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            &copy; {currentYear} {personalData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
