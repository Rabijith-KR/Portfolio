import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

export default function Experience() {
  return (
    <section className="section-container">
      <h2 className="section-title text-center block w-full">Experience</h2>
      
      <div className="max-w-3xl mx-auto relative mt-10">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent"></div>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={exp.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 z-10 mt-6 md:mt-0"></div>

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`w-full md:w-5/12 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}
              >
                <div className="card p-6 relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary transition-all duration-300 group-hover:w-full group-hover:opacity-10 opacity-100 md:opacity-0"></div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <FiBriefcase className="text-primary" /> {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiCalendar className="text-accent" /> {exp.date}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((task, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
