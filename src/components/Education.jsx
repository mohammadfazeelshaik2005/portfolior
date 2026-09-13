import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy, Code } from "lucide-react";

const Education = () => {
  const achievements = [
    {
      icon: <Code className="w-6 h-6 text-purple-400" />,
      title: "230+ LeetCode Solved",
      desc: "Demonstrating proficiency in problem-solving techniques based on data structures and algorithms.",
      link: "leetcode.com/u/fazeelshaik2005/",
    },
    {
      icon: <Award className="w-6 h-6 text-blue-400" />,
      title: "NPTEL OOP using Java",
      desc: "Achieved 84% in the NPTEL course, showcasing a solid understanding of Java and OOP principles.",
    },
    {
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      title: "1st Prize AICTE C Quiz",
      desc: "Secured first prize in the AICTE C Language Quiz, showcasing exceptional proficiency.",
    },
    {
      icon: <Award className="w-6 h-6 text-green-400" />,
      title: "Mini Hackathon Organizer",
      desc: "Took the lead in organizing a college mini hackathon, working closely with participants.",
    },
  ];

  return (
    <section id="education" className="relative z-10 py-24 px-4 sm:px-6 md:px-12 min-h-screen flex flex-col justify-center">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Education Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-12">Education</h2>
          
          <div className="liquid-glass rounded-3xl p-8 md:p-10 relative">
            <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
              <GraduationCap size={100} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">BTech in Computer Science</h3>
              <h4 className="text-lg md:text-xl text-gray-300 mb-6">Geethanjali Institute of Science and Technology, Nellore</h4>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="liquid-glass px-4 py-1 rounded-full text-sm font-medium">2023 - 2027</span>
                <span className="bg-white/10 px-4 py-1 rounded-full text-sm font-medium">CGPA: 8.44</span>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h5 className="text-lg font-medium mb-4 text-gray-200">Courses & Certifications</h5>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center text-sm md:text-base text-gray-400">
                    <span>Generative AI from GDG</span>
                    <span className="text-xs text-gray-500">Jul 2024</span>
                  </li>
                  <li className="flex justify-between items-center text-sm md:text-base text-gray-400">
                    <span>AWS Cloud Computing Workshop</span>
                    <span className="text-xs text-gray-500">Jan 2025</span>
                  </li>
                  <li className="flex justify-between items-center text-sm md:text-base text-gray-400">
                    <span>OOP through Java (NPTEL)</span>
                    <span className="text-xs text-gray-500">May 2025</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-12">Achievements</h2>
          
          <div className="space-y-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="liquid-glass rounded-2xl p-6 flex gap-6 items-start hover:bg-white/5 transition-colors"
              >
                <div className="p-3 bg-white/5 rounded-xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed mb-2">{item.desc}</p>
                  {item.link && (
                    <a href={`https://${item.link}`} target="_blank" rel="noreferrer" className="text-xs text-blue-400 hover:underline">
                      {item.link}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
