import { motion } from 'framer-motion';
import { education, certifications } from '../data/portfolioData';
import { FiBook, FiAward, FiExternalLink } from 'react-icons/fi';

export default function Education() {
  return (
    <section className="section-container bg-slate-50 dark:bg-slate-900/50 my-12 rounded-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Education Section */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-slate-800 dark:text-slate-200 flex items-center gap-3"
          >
            <FiBook className="text-primary" /> Education
          </motion.h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 border-l-4 border-l-primary"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium mb-3">{edu.institution}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-600 dark:text-slate-400">
                    {edu.period}
                  </span>
                  <span className="text-primary font-semibold">
                    CGPA: {edu.cgpa}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-slate-800 dark:text-slate-200 flex items-center gap-3"
          >
            <FiAward className="text-accent" /> Certifications
          </motion.h2>
          
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-accent transition-colors">{cert.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-2">{cert.issuer}</p>
                    <span className="text-sm text-slate-500">{cert.date}</span>
                  </div>
                  {cert.link && cert.link !== "#" && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-accent hover:bg-accent/10 transition-colors"
                      aria-label={`View ${cert.title} certificate`}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
