import BlurText from "../../widget/BlurText";
import { BsGithub, BsInstagram, BsLinkedin, BsTiktok } from "react-icons/bs";

export default function LeftContent() {
  return (
    <div className="flex-shrink-0 max-w-xl relative z-10 md:text-left md:ml-20 lg:ml-20 px-4 space-y-6">
      <BlurText
        text="WELCOME TO MY DIGITAL SPACE"
        delay={250}
        animateBy="words"
        direction="top"
        className="text-sm md:text-base uppercase tracking-[0.2em] font-medium text-gray-500/90 mb-4 font-sans"
      />

      <BlurText
        text="I'm Saka Karna Bramasta"
        delay={750}
        animateBy="words"
        direction="top"
        className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-gray-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-sans"
      />

      <div className="relative group">
        <BlurText
          text="Full Stack Developer & UI/UX Enthusiast"
          delay={1050}
          animateBy="words"
          direction="top"
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium font-sans relative inline-block"
        />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
      </div>
      <IconContent />
    </div>
  );
}

function IconContent() {
  return (
    <div className="flex space-x-4 mt-4">
      <a
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        aria-label="LinkedIn"
      >
        <BsLinkedin className="text-blue-500 w-7 h-7" />
      </a>
      <a
        href="https://instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        aria-label="Instagram"
      >
        <BsInstagram className="text-red-500 w-7 h-7" />
      </a>
      <a
        href="https://tiktok.com/@yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        aria-label="TikTok"
      >
        <BsGithub className="text-black w-7 h-7" />
      </a>
    </div>
  );
}
