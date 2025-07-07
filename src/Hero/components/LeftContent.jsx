import { iconHero } from "../../Array";
import BlurText from "../../widget/BlurText";


export default function LeftContent() {
  return (
    <div className="w-full md:max-w-xl text-center md:text-left relative z-40 px-4 space-y-6 md:ml-20 pt-20 md:pt-0">
      <BlurText
        text="WELCOME TO MY DIGITAL SPACE"
        delay={250}
        animateBy="words"
        direction="top"
        className="text-sm md:text-base uppercase tracking-[0.2em] font-medium md:text-gray-500/90 text-white mb-4 font-sans mx-auto items-center flex justify-center md:mx-0 md:items-start md:justify-start"
      />

      <BlurText
        text="I'm Saka Karna Bramasta"
        delay={750}
        animateBy="words"
        direction="top"
        className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text md:text-gray-500 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-sans mx-auto items-center flex justify-center md:mx-0 md:items-start md:justify-start"
      />

      <div className="relative group mx-auto md:mx-0 inline-block">
        <BlurText
          text="Full Stack Developer & UI/UX Enthusiast"
          delay={1050}
          animateBy="words"
          direction="top"
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium font-sans relative inline-block mx-auto md:mx-0"
        />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
      </div>
      <IconContent />
    </div>
  );
}

function IconContent() {
  return (
    <div className="flex space-x-4 mt-4 mx-auto items-center justify-center md:mx-0 md:items-start md:justify-start transition">
      {iconHero.map((item,idx) => (
        <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={`bg-white p-3 rounded-full transition transform opacity-0 translate-y-4 animate-fadeInUp`}
          style={{ animationDelay: `${idx * 500}ms`, animationFillMode: "forwards" }} >{item.icon}
        </a>
      ))}
    </div>
  );
}
