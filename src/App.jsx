import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white font-inter selection:bg-white/30">
      {/* BACKGROUND VIDEO (FIXED) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-40 md:opacity-60"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
          type="video/mp4"
        />
      </video>

      {/* BOTTOM BLUR OVERLAY FOR HERO (OPTIONAL) */}
      <div className="bottom-blur-mask pointer-events-none" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-12 md:gap-24">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
