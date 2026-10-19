import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus('sending');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      reply_to: formData.email,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      );
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 4000);
    }
  };

  const contactInfo = [
    { icon: FaMapMarkerAlt, title: 'Location', value: 'Delhi NCR' },
    { icon: FaEnvelope, title: 'Email', value: 'devanandsingh61157@gmail.com' },
    { icon: FaPhone, title: 'Phone', value: '+91 8090453628' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Singh-Devanand' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/devanand-singh-6576952a8/' },
    { icon: FaInstagram, href: '#' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="relative py-20 bg-transparent overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Get in <span className="text-purple">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          I am open to new opportunities and collaborations. Feel free to reach out!
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  className={`w-full bg-dark-300 border ${errors.name ? 'border-red-500' : 'border-dark-400'} rounded-xl px-4 py-3 outline-none focus:border-purple focus:shadow-lg focus:shadow-purple/10 transition-all duration-300 placeholder-gray-600`}
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">
                  Your Email
                </label>
                <input
                  className={`w-full bg-dark-300 border ${errors.email ? 'border-red-500' : 'border-dark-400'} rounded-xl px-4 py-3 outline-none focus:border-purple focus:shadow-lg focus:shadow-purple/10 transition-all duration-300 placeholder-gray-600`}
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  className={`w-full h-40 bg-dark-300 border ${errors.message ? 'border-red-500' : 'border-dark-400'} rounded-xl px-4 py-3 outline-none focus:border-purple focus:shadow-lg focus:shadow-purple/10 transition-all duration-300 resize-none placeholder-gray-600`}
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-purple rounded-xl font-medium hover:shadow-lg hover:shadow-purple/30 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <FaPaperPlane className={status === 'sending' ? 'animate-bounce' : ''} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>

              {status === 'sent' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center text-sm"
                >
                  ✅ Message sent successfully!
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-center text-sm"
                >
                  ❌ Failed to send. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="flex items-start group"
              >
                <div className="p-3 bg-purple/10 rounded-xl mr-4 group-hover:bg-purple/20 transition-colors duration-300">
                  <item.icon className="text-purple text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400">{item.value}</p>
                </div>
              </motion.div>
            ))}

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white hover:shadow-lg hover:shadow-purple/30 transition-all duration-300"
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
