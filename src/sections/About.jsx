import { motion } from 'framer-motion';
import { personalData } from '../data/portfolioData';
import { FiAward, FiMapPin, FiBriefcase, FiZap } from 'react-icons/fi';

export default function About() {
  const highlights = [
    { icon: <FiAward className="w-6 h-6" />, title: "Education", text: "B.Tech ECE Graduate" },
    { icon: <FiBriefcase className="w-6 h-6" />, title: "Academic", text: `CGPA: ${personalData.cgpa}` },
    { icon: <FiMapPin className="w-6 h-6" />, title: "Location", text: personalData.location },
    { icon: <FiZap className="w-6 h-6" />, title: "Mindset", text: "Think Deep. Act Fast. Improve Constantly." },
  ];

  return (
    <section className="section-container bg-slate-50 dark:bg-slate-900/50 rounded-3xl my-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center mb-12">
            {personalData.about}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 flex flex-col items-center text-center group"
              >
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
