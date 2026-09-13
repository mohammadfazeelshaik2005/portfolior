import { ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="about" className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 pt-20">
      <div className="flex flex-col md:flex-row items-end gap-8 mt-12 md:mt-24">
        <div className="flex-1">
          {/* Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4 sm:gap-6 mb-6 text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wider"
          >
            <div className="flex items-center gap-1.5 liquid-glass px-3 py-1 rounded-full">
              Andhra Pradesh, India
            </div>
            <div className="flex items-center gap-1.5 liquid-glass px-3 py-1 rounded-full">
              BTech CSE 2023-2027
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight mb-4 leading-[1.1]"
          >
            Shaik Mohammad Fazeel
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl sm:text-3xl text-gray-200 font-light mb-6"
          >
            Computer Science Student & Full Stack Developer.
          </motion.h2>

          {/* Desc */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Passionate about building scalable applications, solving complex algorithmic problems, and crafting beautiful user experiences. Exploring the depths of OOP, Data Structures, and modern web technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition-all"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full font-semibold liquid-glass flex items-center justify-center hover:text-white text-gray-200 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-white/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
