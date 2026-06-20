import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { 
  SiPython, SiC, SiJavascript, SiMysql, SiHtml5, SiReact, SiTailwindcss,
  SiArduino, SiEspressif, SiGit, SiGithub
} from 'react-icons/si';
import { FaMicrochip, FaCss3Alt } from 'react-icons/fa';
import { MdSensors } from 'react-icons/md';
import { VscVscode } from 'react-icons/vsc';

// Icon Map to dynamically render icons based on string name
const iconMap = {
  SiPython: <SiPython />,
  SiC: <SiC />,
  SiJavascript: <SiJavascript />,
  SiMysql: <SiMysql />,
  SiHtml5: <SiHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  SiReact: <SiReact />,
  SiTailwindcss: <SiTailwindcss />,
  SiArduino: <SiArduino />,
  SiEspressif: <SiEspressif />,
  FaMicrochip: <FaMicrochip />,
  MdSensors: <MdSensors />,
  SiGit: <SiGit />,
  SiGithub: <SiGithub />,
  VscVscode: <VscVscode />,
};

const SkillCategory = ({ title, items, delayOffset }) => (
  <div className="mb-10">
    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {items.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delayOffset + index * 0.05 }}
          className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all group"
        >
          <div className="text-3xl text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors mb-3">
            {iconMap[skill.icon]}
          </div>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Technical Skills</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
          <div>
            <SkillCategory title="Programming Languages" items={skills.programming} delayOffset={0} />
            <SkillCategory title="Web Technologies" items={skills.web} delayOffset={0.2} />
          </div>
          
          <div>
            <SkillCategory title="Embedded & IoT" items={skills.embedded} delayOffset={0.1} />
            <SkillCategory title="Tools & IDEs" items={skills.tools} delayOffset={0.3} />
            
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
                Core Concepts
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.concepts.map((concept, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="px-4 py-2 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light rounded-full text-sm font-medium border border-primary/20"
                  >
                    {concept}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
