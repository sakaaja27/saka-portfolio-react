import { achievements } from "./data/achievements";
import { projects } from "./data/projects";

const NAV = [
  { label: "HOME", href: "#", active: true },
  { label: "ABOUT", href: "#highlights" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CASE STUDY", href: "#case-study" },
];

export default function App() {
  return (
    <div className="ruled-bg text-on-surface min-h-screen selection:bg-secondary-container selection:text-on-secondary-fixed">
      <Header />
      <main className="w-full pt-20 max-w-[1280px] mx-auto px-margin relative min-h-[calc(100vh-140px)]">
        <Hero />
        <Highlights />
        <Achievements />
        <Experience />
        <Works />
        <Brands />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1280px] mx-auto px-margin flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm">
          <img
            alt="Robin Monogram Badge"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIb3v60loTs23tCa9ryKrXvE9Fud_kEPYxFvcdzuX95XeeCFFCqNdqYvIEX1EfZYKRs0-FP4sveea3fdVky8eN6g9ziMGEQjFEfTWHb9eroF2Yzc-p2lhM_r0PbtiQvjyhbmU9UBo7NZ-8CxxUJuvWVLPEUF_Bai0ybWz9pgTDLmnRXLGxwv4OLHyhVevVCXhbaOKLnqRcEwHmF3hbt47H4YWlPRzjuKIlMyfePeF7"
          />
          <a className="flex items-center gap-space-xs" href="#">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight">Robin</span>
            <span className="px-1.5 py-0.5 bg-secondary-container text-on-secondary-fixed font-label-caps text-label-caps rounded rotate-[-2deg]">
              FOLIO
            </span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-space-xs bg-surface-container-low px-space-xs py-1 rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={
                item.active
                  ? "px-space-sm py-1 rounded-full transition-all bg-secondary-container text-on-secondary-fixed shadow-[2px_2px_0px_#111111] font-bold"
                  : "px-space-sm py-1 font-label-tag text-label-tag text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-full transition-all"
              }
            >
              • {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-surface-container-high rounded-full">
            <span className="w-2.5 h-2.5 rounded-full bg-error inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-container inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container inline-block" />
          </div>
          <a
            className="px-space-md py-2 bg-primary text-on-primary font-label-tag text-label-tag rounded-full shadow-[2px_2px_0px_#fdcf49] hover:bg-surface-container-high hover:text-on-surface transition-all flex items-center justify-center"
            href="#"
          >
            ♥ CONTACT
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative w-full pt-8 pb-16 md:pt-14 md:pb-24 flex flex-col items-center justify-center overflow-visible">
      {/* Floating avatar stickers */}
      <div className="hidden lg:flex absolute left-8 top-16 flex-col items-center z-20 cursor-pointer transition-transform hover:scale-105">
        <div className="w-12 h-4 bg-secondary-container/85 -mb-2 z-30 shadow-sm rotate-[-8deg] rounded-none" />
        <div className="w-20 h-20 rounded-full p-1 bg-surface-container-lowest shadow-[3px_3px_0px_#111111] overflow-hidden rotate-[-4deg]">
          <img
            className="w-full h-full object-cover rounded-full"
            alt="Editorial close-up profile portrait of Robin, a creative product designer with retro rim glasses."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq3jUcvff_d6ROqZD63aVja-N-55pVrkE61WNpKCtodjOsQfF-RpuFJjyRjiBbL4tmIm7YM6l_PA44DG3fG5DvHLapyeg1Dsl5ORJcjT0GYbmjHR8NDDcONK7QukiCQbkh_ETCCae-xZwvKnQENCb-0cKIY6IT_-2DZ1cKbHXLzuqWAMebThKNIGktawmPbex2V239R8TFm13iDUt0Uis7eUmKq19tB8IXO9z5WQac"
          />
        </div>
        <span className="mt-2 font-label-caps text-label-caps bg-surface-container-lowest px-2 py-0.5 shadow-[1px_1px_0px_#111111] text-on-surface rotate-[2deg]">
          Robin.heic
        </span>
      </div>

      <div className="hidden lg:flex absolute right-10 top-20 flex-col items-center z-20 cursor-pointer transition-transform hover:scale-105">
        <div className="w-12 h-4 bg-error-container/90 -mb-2 z-30 shadow-sm rotate-[12deg] rounded-none" />
        <div className="w-20 h-20 rounded-full p-1 bg-surface-container-lowest shadow-[3px_3px_0px_#111111] overflow-hidden rotate-[5deg]">
          <img
            className="w-full h-full object-cover rounded-full"
            alt="A candid 35mm film polaroid snapshot of a designer sketching wireframes in a sunlit studio."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByRTPVKcbbY1lsummnGwvjT3AA56I5pKX1hVGsknBeRMoo8FdF6c4lf_UsWgY1u9r-7Bc8S3A7ZNK7iWgcafxEy5qSgYIhB5z8ZodTDiiUZCTbi68P5JfF0YubPkmZpycbPybDqFcFpOQ8lsZC1kWQJ0GTfMiTqrP9HMR876tjlmojaGJBfHfScj39g6zeuCnyuOgNdWPRPVJ1ZY6PPHEcWzeNbUL1TxOa8RCMyARo"
          />
        </div>
        <span className="mt-2 font-label-caps text-label-caps bg-surface-container-lowest px-2 py-0.5 shadow-[1px_1px_0px_#111111] text-on-surface rotate-[-2deg]">
          @desk_3pm
        </span>
      </div>

      <div className="relative flex flex-col items-center text-center max-w-4xl px-4 z-10">
        <div className="relative mb-3 flex items-center justify-center">
          <div className="absolute -top-3 w-10 h-3 bg-secondary-container/80 rotate-[3deg] shadow-sm" />
          <div className="px-3 py-1 bg-surface-container-lowest shadow-[2px_2px_0px_#111111] rotate-[-1.5deg]">
            <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">
              ✎ My Name Is
            </span>
          </div>
        </div>

        <div className="w-full flex items-center justify-between max-w-lg -mb-3 z-20 pointer-events-none px-4">
          <span className="pointer-events-auto bg-[#cbead6] text-[#0f3d23] font-label-caps text-label-caps px-3 py-1 shadow-[2px_2px_0px_#111111] rotate-[-5deg] hover:rotate-0 transition-transform">
            ★ MAKE THINGS
          </span>
          <span className="pointer-events-auto bg-secondary-container text-on-secondary-fixed font-label-caps text-label-caps px-3 py-1 shadow-[2px_2px_0px_#111111] rotate-[4deg] hover:rotate-0 transition-transform">
            SWEAT THE DETAILS ✦
          </span>
        </div>

        <div className="relative w-full max-w-2xl bg-surface-container-lowest px-8 py-5 md:py-8 shadow-[4px_4px_0px_#111111] flex items-center justify-center my-2">
          <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-primary" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
          <span className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-primary" />
          <span className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-primary" />
          <h1 className="font-display text-display md:text-[6.5rem] md:leading-[6.2rem] text-primary tracking-tighter select-none font-bold">
            ROBIN
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 -mt-3 z-20">
          <div className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 font-label-caps text-label-caps shadow-[2px_2px_0px_#111111] rotate-[-2deg] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Product Designer</span>
          </div>
          <div className="bg-surface-container-lowest text-on-surface px-3 py-1 font-label-tag text-label-tag shadow-[2px_2px_0px_#111111] rotate-[1.5deg] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1db954] animate-ping" />
            <span className="font-bold tracking-tight">OPEN TO NEW WORK & GOOD PROBLEMS</span>
          </div>
          <div className="bg-[#d2f3e8] text-[#0a4735] px-2.5 py-1 font-label-caps text-label-caps shadow-[2px_2px_0px_#111111] rotate-[-3deg]">
            Chicago, IL ⌖
          </div>
        </div>

        <div className="mt-10 md:mt-12 flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-2 text-center">
            <span className="font-headline-lg text-headline-lg md:text-[2.75rem] md:leading-[3.25rem] text-primary font-bold">
              I design software that
            </span>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#cbead6] text-[#0a4735] shadow-[2px_2px_0px_#111111] rotate-[6deg]">
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                adjust
              </span>
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-center mt-1">
            <span className="font-headline-lg text-headline-lg md:text-[2.75rem] md:leading-[3.25rem] text-primary font-bold">
              gets out of your way.
            </span>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#ffd8df] text-[#b31b46] shadow-[2px_2px_0px_#111111] rotate-[-8deg]">
              <span className="material-symbols-outlined text-[20px]">local_florist</span>
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2">
          <a
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-on-primary font-headline-sm text-headline-sm uppercase tracking-wider rounded-none shadow-[4px_4px_0px_#fdcf49] hover:shadow-[1px_1px_0px_#fdcf49] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            href="#contact"
          >
            <span>→</span>
            <span>CONTACT ME</span>
          </a>
          <span className="font-label-caps text-label-caps text-on-surface-variant opacity-70 tracking-widest mt-1">
            REPLIES WITHIN 24 HOURS
          </span>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="w-full py-8 scroll-mt-20" id="highlights">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Note #01 */}
        <div className="relative bg-[#fff9d6] p-6 shadow-[3px_3px_0px_#111111] rotate-[-1.5deg] flex flex-col justify-between">
          <div className="w-16 h-4 bg-on-tertiary-container/20 absolute -top-2 left-8 rotate-[-2deg]" />
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-caps text-label-caps bg-secondary-container px-2 py-0.5 text-on-secondary-fixed">
                NOTE #01
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">2024.LOG</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface leading-relaxed">
              Complexity is easy. Simple, tactile, obvious interaction requires radical subtraction and
              tireless empathy for the edge cases.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              Subtractive Craft
            </span>
          </div>
        </div>

        {/* Note #02 */}
        <div className="relative bg-[#e9f3ff] p-6 shadow-[3px_3px_0px_#111111] rotate-[1deg] flex flex-col justify-between">
          <div className="w-16 h-4 bg-secondary-container/70 absolute -top-2 right-8 rotate-[3deg]" />
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-caps text-label-caps bg-[#b3c5ff] px-2 py-0.5 text-tertiary-container">
                STACK
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">EXP: 8 YRS</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {["Design Systems", "Figma Prototyping", "React / Swift", "Tactile Micro-copy"].map(
                (tag, i) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 bg-surface-container-lowest shadow-[1px_1px_0px_#111111] font-label-tag text-label-tag text-on-surface ${
                      i % 2 ? "rotate-[1deg]" : "rotate-[-1deg]"
                    }`}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span className="font-label-caps text-label-caps text-on-surface">Physical meets digital</span>
            <span className="material-symbols-outlined text-[18px]">touch_app</span>
          </div>
        </div>

        {/* Note #03 */}
        <div className="relative bg-[#ffdce3] p-6 shadow-[3px_3px_0px_#111111] rotate-[-0.8deg] flex flex-col justify-between">
          <div className="w-16 h-4 bg-error-container/60 absolute -top-2 left-1/3 rotate-[-1deg]" />
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-caps text-label-caps bg-[#ffb4c2] px-2 py-0.5 text-on-error-container">
                STATUS
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">Q3 / Q4</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface leading-relaxed">
              Taking on select product design, founding design advisory, and interaction architecture
              contracts.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span className="font-label-caps text-label-caps text-on-surface font-bold">
              1 SPOT AVAILABLE
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="py-20 md:py-28 border-t border-black/10 scroll-mt-20" id="achievements">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-3">
          <span className="w-3.5 h-3.5 bg-accentYellow rounded-sm border border-black/20"></span>
          <h2 className="font-display font-black text-xl md:text-2xl tracking-tight uppercase text-ink">
            Index 02 // Achievements &amp; Recognition
          </h2>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="bg-white text-ink font-mono text-xs font-bold px-3 py-1 rounded-full border border-black/20 shadow-brutal flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            6 HONORS
          </span>
        </div>
      </div>
      {/* 6 Achievements Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, index) => {
          const bgColors = ["bg-accentYellow", "bg-[#EBF3FF]", "bg-[#FFF3B0]", "bg-[#E6F8EE]", "bg-[#FFEAEA]", "bg-[#FFF6D4]"];
          const tags = [
            { label: "★ NATIONAL GRANT", hash: "#P2MW" },
            { label: "★ HACKATHON", hash: "#KMIPN7" },
            { label: "★ INNOVATION", hash: "#PFSAINS" },
            { label: "★ EXHIBITION", hash: "#POLIJE" },
            { label: "★ 1ST WINNER", hash: "#EPIM" },
            { label: "★ 1ST WINNER", hash: "#WEBDEV" },
          ];
          const iconsEmoji = ["⭐", "🏆", "🎖️", "🥇", "🏅", "✨"];

          return (
            <div
              key={item.id}
              className="bg-white rounded-[12px] p-6 border-2 border-ink shadow-brutal flex flex-col justify-between group hover:-translate-y-1 hover:shadow-card-lift transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${bgColors[index % bgColors.length]} border-2 border-ink shadow-[1px_2px_0px_rgba(0,0,0,0.1)] flex items-center justify-center text-xl select-none group-hover:rotate-6 transition-transform`}>
                    {iconsEmoji[index % iconsEmoji.length]}
                  </div>
                  <span className={`${index >= 4 ? "bg-[#D3F578] text-ink border-ink/40" : index === 0 ? "bg-accentYellow text-ink border-ink/40" : "bg-accentBlue text-white border-ink/20"} font-mono text-xs font-bold px-3 py-1 rounded-full border shadow-sm`}>
                    {item.year}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base md:text-lg text-ink leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-ink/75 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-ink/10 flex items-center justify-between text-[11px] font-mono font-semibold text-ink/60">
                <span>{tags[index].label}</span>
                <span className="text-stone-400">{tags[index].hash}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="py-20 md:py-28 border-t border-black/10 scroll-mt-20" id="experience">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-3">
          <span className="w-3.5 h-3.5 bg-accentBlue rounded-sm border border-black/20"></span>
          <h2 className="font-display font-black text-xl md:text-2xl tracking-tight uppercase text-ink">
            Index 03 // Work Experience &amp; Roles
          </h2>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="bg-white text-ink font-mono text-xs font-bold px-3 py-1 rounded-full border border-black/20 shadow-brutal flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            5 ROLES
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Role 1 */}
        <div className="bg-white rounded-[12px] p-6 border-2 border-ink shadow-brutal flex flex-col justify-between group hover:-translate-y-1 hover:shadow-card-lift transition-all">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-ink/10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="font-display font-bold text-lg md:text-xl text-ink">Frontend Developer</h3>
                  <span className="bg-accentYellow text-ink font-mono text-xs font-bold px-2.5 py-0.5 rounded-full border border-ink/40">Contract</span>
                </div>
                <p className="font-sans text-sm font-semibold text-black/80">PT. Sinergi Gula Nusantara - CV.Sinergi Teknologi</p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="bg-white text-ink font-mono text-xs font-bold px-3 py-1 rounded-full border border-black/20">2025 - 2026</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-xs md:text-sm text-ink/80 font-sans">
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Redesign the SIMPG desktop application interface to increase usability and operational efficiency.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Collaborate with backend teams in system integration and application functionality testing.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Develop and implement new features according to user needs and company business processes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Develop desktop applications using the C# programming language.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Role 2 */}
        <div className="bg-white rounded-[12px] p-6 border-2 border-ink shadow-brutal flex flex-col justify-between group hover:-translate-y-1 hover:shadow-card-lift transition-all">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-ink/10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="font-display font-bold text-lg md:text-xl text-ink">Software Developer</h3>
                  <span className="bg-accentYellow text-ink font-mono text-xs font-bold px-2.5 py-0.5 rounded-full border border-ink/40">Contract</span>
                </div>
                <p className="font-sans text-sm font-semibold text-black/80">FASTECHNO</p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="bg-white text-ink font-mono text-xs font-bold px-3 py-1 rounded-full border border-black/20">2023 - 2026</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-xs md:text-sm text-ink/80 font-sans">
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Develop desktop applications using the Java programming language.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Develop mobile applications using Java and Flutter with a total of two applications.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Develop a website to support reporting disaster and data management systems.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Collaborate with BPBD Jember to develop disaster management and reporting applications and websites.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Develop waste reporting and AI integration websites.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Role 3 */}
        <div className="bg-white rounded-[12px] p-6 border-2 border-ink shadow-brutal flex flex-col justify-between group hover:-translate-y-1 hover:shadow-card-lift transition-all">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-ink/10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="font-display font-bold text-lg md:text-xl text-ink">Web Developer</h3>
                  <span className="bg-[#EBF3FF] text-accentBlue font-mono text-xs font-bold px-2.5 py-0.5 rounded-full border border-ink/20">Freelance</span>
                </div>
                <p className="font-sans text-sm font-semibold text-black/80">CV. Barouk Raya Technology</p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="bg-white text-ink font-mono text-xs font-bold px-3 py-1 rounded-full border border-black/20">2023 - 2024</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-xs md:text-sm text-ink/80 font-sans">
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Develop a web-based management system for dental clinic operations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Implement drug and raw material stock management features, including recording incoming and outgoing goods.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Build transaction modules for the sale and purchase of medicines and raw materials.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Develop a patient reservation system to increase the efficiency of clinical services.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Collaborate on database design and backend integration to ensure data accuracy and system stability.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Role 4 */}
        <div className="bg-white rounded-[12px] p-6 border-2 border-ink shadow-brutal flex flex-col justify-between group hover:-translate-y-1 hover:shadow-card-lift transition-all">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-ink/10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="font-display font-bold text-lg md:text-xl text-ink">Member System Information Division</h3>
                  <span className="bg-[#FFEAEA] text-[#E05252] font-mono text-xs font-bold px-2.5 py-0.5 rounded-full border border-ink/20">Organization</span>
                </div>
                <p className="font-sans text-sm font-semibold text-black/80">Himpunan Mahasiswa Jurusan Teknologi Informasi Politeknik Negeri Jember</p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="bg-white text-ink font-mono text-xs font-bold px-3 py-1 rounded-full border border-black/20">2023 - 2024</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-xs md:text-sm text-ink/80 font-sans">
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Design and develop a website for HMJ TI POLIJE to support information dissemination and member engagement.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Implement features such as news and information display, event schedules, and member data management.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Collaborate with other divisions to integrate content and ensure a seamless user experience.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Maintain website performance and security, including regular updates and backups.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Role 5 */}
        <div className="bg-white rounded-[12px] p-6 border-2 border-ink shadow-brutal flex flex-col justify-between group hover:-translate-y-1 hover:shadow-card-lift transition-all md:col-span-2 lg:col-span-1">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-ink/10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="font-display font-bold text-lg md:text-xl text-ink">IT Support</h3>
                  <span className="bg-[#E6F8EE] text-ink font-mono text-xs font-bold px-2.5 py-0.5 rounded-full border border-ink/20">Internship</span>
                </div>
                <p className="font-sans text-sm font-semibold text-black/80">PT. Kutai Timber Indonesia</p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="bg-white text-ink font-mono text-xs font-bold px-3 py-1 rounded-full border border-black/20">2021 - 2022</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-xs md:text-sm text-ink/80 font-sans">
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Assist with installation, maintenance and troubleshooting of IT devices to support employee operations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accentBlue font-bold mt-0.5">▪</span>
                <span>Gain practical experience in managing information systems within industrial companies.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Works() {
  return (
    <section className="w-full py-10 scroll-mt-20" id="case-study">
      <div className="flex items-center justify-between mb-6 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-secondary-container inline-block shadow-[1px_1px_0px_#111111]" />
          <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tight">
            Index 04 // Selected Projects &amp; Artifacts
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-white text-ink font-mono text-xs font-bold px-3 py-1 rounded-full border border-black/20 shadow-brutal flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            6 PROJECTS
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`group relative p-4 shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#fdcf49] transition-all flex flex-col ${
              index % 2 === 1 ? "bg-[#1c1b1b] text-on-primary" : "bg-surface-container-lowest text-on-surface"
            }`}
          >
            <div className="flex items-center justify-between pb-3">
              <div className="flex items-center gap-2">
                <span className={`font-label-caps text-label-caps px-2 py-0.5 ${index % 2 === 1 ? "bg-surface-variant text-on-surface" : "bg-surface-container text-on-surface-variant"}`}>
                  #PROJECT 0{index + 1}
                </span>
                <span className={`font-label-caps text-label-caps ${index % 2 === 1 ? "text-primary-fixed-dim" : "text-on-surface-variant"}`}>
                  WEB &amp; APP
                </span>
              </div>
              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-label-tag text-label-tag transition-transform group-hover:translate-x-1 ${index % 2 === 1 ? "text-on-primary" : "text-on-surface"}`}
                >
                  ↗
                </a>
              )}
            </div>
            <div className="relative w-full h-64 bg-primary-container overflow-hidden shadow-inner flex items-center justify-center">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={project.title}
                src={project.image}
              />
              <span className={`absolute top-3 left-3 px-2 py-0.5 font-label-caps text-label-caps shadow-[1px_1px_0px_#111111] ${index % 2 === 1 ? "bg-[#4c7df7] text-on-primary rotate-[1.5deg]" : "bg-secondary-container text-on-secondary-fixed rotate-[-2deg]"}`}>
                {project.title}
              </span>
            </div>
            <div className="pt-4 flex flex-col flex-1 justify-between">
              <div>
                <h3 className={`font-headline-sm text-headline-sm font-bold ${index % 2 === 1 ? "text-on-primary" : "text-primary"}`}>
                  {project.title}
                </h3>
                <p className={`font-body-sm text-body-sm mt-1 ${index % 2 === 1 ? "text-primary-fixed-dim" : "text-on-surface-variant"}`}>
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`font-label-caps text-[0.7rem] px-2 py-0.5 ${index % 2 === 1 ? "bg-surface-container-highest text-inverse-surface" : "bg-surface-container-high text-on-surface"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const BRANDS = [
  { name: "DJI", cls: "bg-surface-container-lowest text-on-surface rotate-[-2deg]", hover: "hover:bg-secondary-container" },
  { name: "F1", cls: "bg-[#ffd8df] text-[#ba1a1a] rotate-[2.5deg] font-extrabold tracking-tight", hover: "" },
  { name: "klook", cls: "bg-[#e0f2fe] text-[#0369a1] rotate-[-1deg]", hover: "" },
  { name: "NIKE", cls: "bg-surface-container-lowest text-on-surface rotate-[1.5deg] font-black italic tracking-widest", hover: "hover:bg-secondary-container" },
  { name: "HONDA", cls: "bg-[#fef08a] text-[#715800] rotate-[-3deg] tracking-widest", hover: "" },
  { name: "LINEAR", cls: "bg-[#dcfce7] text-[#15803d] rotate-[1deg]", hover: "" },
];

function Brands() {
  return (
    <section className="w-full py-12 flex flex-col items-center">
      <div className="relative mb-5 flex items-center gap-2">
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
          trusted by teams at
        </span>
        <span className="w-8 h-[1px] bg-outline-variant inline-block" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-3xl">
        {BRANDS.map((b) => (
          <div
            key={b.name}
            className={`px-4 py-2 shadow-[2px_2px_0px_#111111] hover:rotate-0 transition-all cursor-pointer ${b.cls} ${b.hover}`}
          >
            <span className="font-headline-sm text-headline-sm font-bold tracking-tighter">{b.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="w-full pt-10 pb-16 flex flex-col items-center justify-center text-center"
    >
      <div className="relative group cursor-pointer">
        <div className="w-24 h-24 rounded-full bg-secondary-container shadow-[4px_4px_0px_#111111] flex items-center justify-center rotate-[-3deg] group-hover:rotate-6 group-hover:scale-110 transition-all">
          <svg
            className="w-14 h-14 text-on-secondary-fixed"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 13s1.5 2 4 2 4-2 4-2" />
            <line strokeWidth="3.5" x1="9" x2="9.01" y1="9" y2="9" />
            <line strokeWidth="3.5" x1="15" x2="15.01" y1="9" y2="9" />
          </svg>
        </div>
        <div className="absolute -right-24 top-2 hidden sm:block bg-surface-container-lowest px-2.5 py-1 shadow-[2px_2px_0px_#111111] rotate-[8deg]">
          <span className="font-label-caps text-[0.65rem] text-on-surface uppercase font-bold">
            Say hi! ✌
          </span>
        </div>
      </div>

      <h2 className="font-display text-[2.75rem] md:text-display text-primary mt-6 tracking-tight font-bold">
        LET’S TALK
      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-2">
        Got a project, a hard problem, or just want to say hi? Send it over. I read every message.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-container-lowest shadow-[3px_3px_0px_#111111] hover:bg-secondary-container hover:text-on-secondary-fixed text-on-surface font-label-tag text-label-tag rotate-[-1deg] transition-all"
          href="mailto:hello@robin.design"
        >
          <span className="material-symbols-outlined text-[18px]">mail</span>
          <span>hello@robin.design</span>
        </a>
        <button
          type="button"
          title="Copy email to clipboard"
          onClick={() => {
            navigator.clipboard.writeText("hello@robin.design");
            alert("Copied hello@robin.design to clipboard!");
          }}
          className="inline-flex items-center gap-1.5 px-3 py-2.5 bg-surface-container-high shadow-[2px_2px_0px_#111111] hover:bg-surface-container text-on-surface font-label-caps text-label-caps rotate-[1.5deg] transition-all"
        >
          <span className="material-symbols-outlined text-[16px]">content_copy</span>
          <span>COPY</span>
        </button>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    { label: "ReadCV", cls: "rotate-[-1deg]" },
    { label: "Dribbble", cls: "rotate-[1.5deg]" },
    { label: "GitHub", cls: "rotate-[-2deg]" },
    { label: "Substack", cls: "rotate-[1deg]" },
  ];

  return (
    <footer className="w-full bg-surface-container-low py-space-xl mt-space-2xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="max-w-[1280px] mx-auto px-margin flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="flex items-center gap-space-sm">
          <span className="font-label-caps text-label-caps text-on-surface-variant">
            © 2024 ROBIN STUDIO. BUILT WITH PHYSICAL DELIGHT.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-space-sm">
          {links.map((l) => (
            <a
              key={l.label}
              href="#"
              className={`px-space-sm py-1 bg-surface shadow-[1px_1px_0px_#111111] font-label-tag text-label-tag text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-fixed transition-colors ${l.cls}`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
