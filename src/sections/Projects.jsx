import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { FiGithub, FiExternalLink, FiX, FiImage, FiPlay } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  // Fallback if no images are provided
  const hasImages = project.images && project.images.length > 0;
  const currentImgUrl = hasImages ? project.images[activeImage] : null;

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card flex flex-col h-full group"
      >
        {/* Image Section */}
        <div className="relative h-60 w-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          {hasImages ? (
            <>
              <img 
                src={currentImgUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
                onError={(e) => {
                  e.target.src = `https://placehold.co/600x400/1e293b/ffffff?text=${encodeURIComponent(project.title)}`;
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <FiImage className="text-white w-10 h-10" />
              </div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              <span className="text-lg font-medium">{project.title}</span>
            </div>
          )}
        </div>

        {/* Thumbnail Gallery */}
        {hasImages && project.images.length > 1 && (
          <div className="flex p-2 gap-2 overflow-x-auto bg-slate-50 dark:bg-slate-900/50">
            {project.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-colors ${
                  activeImage === index ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" 
                     onError={(e) => { e.target.src = "https://placehold.co/100x100/1e293b/ffffff?text=Img"; }}/>
              </button>
            ))}
          </div>
        )}

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm flex-grow">
            {project.description}
          </p>
          
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Key Features:</h4>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
              {/* {project.features.slice(0, 3).map((feature, i) => (
                <li key={i} className="flex items-start gap-1">
                  <span className="text-primary mt-1">•</span> <span>{feature}</span>
                </li>
              ))}
              {project.features.length > 3 && (
                <li className="text-xs text-slate-500 italic mt-1">+ {project.features.length - 3} more</li>
              )} */}
              {project.features.slice(0, showAllFeatures ? project.features.length : 3)
                 .map((feature, i) => (
                <li key={i} className="flex items-start gap-1">
                 <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
    </li>
))}

{project.features.length > 3 && (
  <button
    onClick={() => setShowAllFeatures(!showAllFeatures)}
    className="text-xs text-primary hover:underline mt-2"
  >
    {showAllFeatures
      ? "Show Less"
      : `+ ${project.features.length - 3} more`}
  </button>
)}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.technologies.map((tech, i) => (
              <span key={i} className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            {project.github && project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">
                <FiGithub /> Code
              </a>
            )}
            {project.demo && project.demo !== "#" && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors">
                <FiExternalLink /> Live Demo
              </a>
            )}
            {project.video && (
  <a
    href={project.video}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
  >
    <FiPlay />
    Watch Demo
  </a>
)}
          </div>
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && hasImages && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button 
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors"
              onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
            >
              <FiX className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={currentImgUrl} 
              alt={project.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                e.target.src = `https://placehold.co/1200x800/1e293b/ffffff?text=${encodeURIComponent(project.title)}`;
              }}
            />
            {/* Simple navigation within lightbox if multiple images */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" onClick={(e) => e.stopPropagation()}>
                {project.images.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${activeImage === idx ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white'}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function Projects() {
  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title mb-4">Featured Projects</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A showcase of my recent work bridging hardware and software, from IoT solutions to interactive web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
