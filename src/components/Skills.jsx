import { motion } from "framer-motion";
import { Code2, Layout, Database, Server, Wrench, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6 mb-4 text-blue-400" />,
      skills: ["Java", "JavaScript", "Python", "C"],
    },
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6 mb-4 text-pink-400" />,
      skills: ["HTML", "CSS", "React.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 mb-4 text-green-400" />,
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 mb-4 text-yellow-400" />,
      skills: ["MongoDB", "MySQL", "LowDB"],
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6 mb-4 text-purple-400" />,
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
      title: "Concepts",
      icon: <Lightbulb className="w-6 h-6 mb-4 text-orange-400" />,
      skills: ["OOP", "Data Structures & Algorithms", "REST APIs"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="relative z-10 py-24 px-4 sm:px-6 md:px-12 min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-light mb-4">Technical Arsenal</h2>
        <p className="text-gray-400 text-lg">Tools and technologies I use to build robust applications.</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="liquid-glass rounded-2xl p-6 sm:p-8 hover:bg-white/5 transition-colors duration-300"
          >
            {category.icon}
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 bg-white/10 rounded-full text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
