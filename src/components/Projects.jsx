import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Banking Management System",
      tech: "Node.js | Express.js | LowDB | Tailwind CSS | IMAP | Nodemailer",
      description: [
        "Developed a full-stack fintech banking prototype using Node.js and Express.js with LowDB (JSON) for lightweight data persistence.",
        "Implemented core banking features including account management, loan tracking, transaction history, and interactive spending analytics with a responsive Tailwind CSS interface.",
        "Built an offline-first email banking module using imap-simple, mailparser, and nodemailer to securely process fund-transfer and bill-payment commands via email, with automated transaction processing and dual-notification alerts without requiring user login.",
      ],
      links: { github: "#", live: "#" },
    },
    {
      title: "Spotify Clone Frontend",
      tech: "React.js | Tailwind CSS",
      description: [
        "Built a responsive Spotify-inspired music streaming frontend using React.js and Tailwind CSS.",
        "Developed reusable components, playlist management, and music player controls.",
        "Implemented responsive layouts and React state management for seamless user interaction.",
      ],
      links: { github: "#", live: "#" },
    },
    {
      title: "Personal Portfolio Website",
      tech: "HTML | CSS | JavaScript",
      description: [
        "Designed and deployed a responsive personal portfolio website showcasing projects and skills.",
        "Optimized performance and mobile responsiveness.",
        "Hosted the website on Netlify.",
      ],
      links: { github: "#", live: "#" },
    },
  ];

  return (
    <section id="projects" className="relative z-10 py-24 px-4 sm:px-6 md:px-12 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-light mb-4">Featured Work</h2>
        <p className="text-gray-400 text-lg">A selection of projects that showcase my abilities.</p>
      </motion.div>

      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="liquid-glass rounded-3xl p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm md:text-base font-medium mb-6 uppercase tracking-wider">{project.tech}</p>
                <ul className="list-disc list-outside ml-5 text-gray-300 space-y-3 mb-8">
                  {project.description.map((desc, i) => (
                    <li key={i} className="leading-relaxed pl-2">{desc}</li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-sm font-medium bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
                  >
                    <FaGithub size={16} /> GitHub
                  </a>
                  <a
                    href={project.links.live}
                    className="flex items-center gap-2 text-sm font-medium bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-full transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
