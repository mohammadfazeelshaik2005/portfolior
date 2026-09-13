import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 md:py-6 bg-black/30 backdrop-blur-md border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="text-xl md:text-2xl font-bold tracking-tighter">
            FAZEEL
          </a>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden sm:flex items-center gap-2 px-6 py-2 rounded-full liquid-glass text-sm font-medium"
          >
            Contact
          </motion.a>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full liquid-glass flex items-center justify-center relative z-50"
          >
            <Menu
              className={`absolute transition-all duration-500 ${isMenuOpen ? "opacity-0 rotate-180 scale-50" : "opacity-100 rotate-0"}`}
              size={20}
            />
            <X
              className={`absolute transition-all duration-500 ${isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180 scale-50"}`}
              size={20}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-[72px] left-0 w-full z-40 lg:hidden transition-all duration-500 ease-out bg-gray-900/95 backdrop-blur-xl border-b border-white/10 ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`}
      >
        <div className="p-6 flex flex-col gap-2">
          {links.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`py-3 px-4 rounded-lg hover:bg-white/10 transition-all text-gray-300 hover:text-white ${isMenuOpen ? "translate-x-0" : "-translate-x-4"}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className={`py-3 px-4 rounded-lg hover:bg-white/10 transition-all text-gray-300 hover:text-white ${isMenuOpen ? "translate-x-0" : "-translate-x-4"}`}
            style={{ transitionDelay: `${links.length * 50}ms` }}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
