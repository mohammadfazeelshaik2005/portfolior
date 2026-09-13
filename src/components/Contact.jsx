import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 py-24 px-4 sm:px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="liquid-glass rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-light mb-6">Let's Connect</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Currently open to new opportunities and collaborations. Feel free to reach out if you have a question or just want to say hi!
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:mohammadfazeelshaik2005@gmail.com"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors font-medium"
          >
            <Mail size={20} /> Email Me
          </a>
          <a
            href="https://linkedin.com/in/mohammad-fazeel-shaik"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full liquid-glass hover:text-white transition-colors font-medium text-gray-200"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/mohammadfazeelshaik2005"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full liquid-glass hover:text-white transition-colors font-medium text-gray-200"
          >
            <FaGithub size={20} /> GitHub
          </a>
          <a
            href="tel:9701008096"
            className="flex items-center gap-3 px-6 py-3 rounded-full liquid-glass hover:text-white transition-colors font-medium text-gray-200"
          >
            <Phone size={20} /> 9701008096
          </a>
        </div>
      </motion.div>

      <div className="mt-24 text-center text-sm text-gray-600 border-t border-white/5 pt-8">
        <p>© {new Date().getFullYear()} Shaik Mohammad Fazeel. Designed & Built with React and Tailwind CSS.</p>
      </div>
    </section>
  );
};

export default Contact;
