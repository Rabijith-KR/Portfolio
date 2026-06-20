import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { personalData } from '../data/portfolioData';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Placeholder EmailJS Configuration
    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'service_dx9yodn';
    const TEMPLATE_ID = 'template_9nul62p';
    const PUBLIC_KEY = 'Ct1yp0qyjMF2GwUr_';

    // if (SERVICE_ID === 'YOUR_SERVICE_ID') {
    //   // Simulation mode for demo if keys are not set
    //   setTimeout(() => {
    //     setIsSubmitting(false);
    //     setStatus('success');
    //     e.target.reset();
    //   }, 1500);
    //   return;
    // }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          setIsSubmitting(false);
          setStatus('success');
          e.target.reset();
      }, (error) => {
          setIsSubmitting(false);
          setStatus('error');
      });
  };

  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title mb-4">Get In Touch</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="card p-8 h-full flex flex-col justify-center space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Contact Information</h3>
            
            <div className="flex items-start gap-4 group">
              <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <FiMail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium mb-1">Email</p>
                <a href={`mailto:${personalData.email}`} className="text-slate-800 dark:text-slate-200 hover:text-primary transition-colors font-medium">
                  {personalData.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-4 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <FiPhone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium mb-1">Phone</p>
                <a href={`tel:${personalData.phone}`} className="text-slate-800 dark:text-slate-200 hover:text-accent transition-colors font-medium">
                  {personalData.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-4 rounded-full bg-teal-500/10 text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                <FiMapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium mb-1">Location</p>
                <p className="text-slate-800 dark:text-slate-200 font-medium">
                  {personalData.location}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  id="user_name" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  id="user_email" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
              <input 
                type="text" 
                name="subject" 
                id="subject" 
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white"
                placeholder="How can I help you?"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows="5" 
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all resize-none dark:text-white"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all ${
                isSubmitting ? 'bg-primary/70 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark hover:shadow-lg'
              }`}
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Send Message <FiSend /></>
              )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg flex items-center gap-2">
                <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
              </motion.div>
            )}
            
            {status === 'error' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg flex items-center gap-2">
                <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm font-medium">Oops! Something went wrong. Please try again later.</p>
              </motion.div>
            )}

          </form>
        </motion.div>

      </div>
    </section>
  );
}
