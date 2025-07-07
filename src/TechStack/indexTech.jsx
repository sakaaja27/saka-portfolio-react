import { Techs } from "../Array";

export default function TechStack() {
  return (
    <div className="pt-24 text-white bg-gradient-to-b from-black to-blue-900">
      <h1 className="text-5xl text-center font-extrabold tracking-tight drop-shadow-md">
        Tech Stack
      </h1>
      <div className="mt-10 container mx-auto  shadow-lg py-6 overflow-hidden">
        <div className="overflow-hidden relatice w-full">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {Techs.concat(Techs).map((tech, idx) => (
              <div
                key={tech.name + idx}
                className="flex flex-col items-center px-4 py-2 rounded-xl backdrop-blur-lg bg-white/20 min-w-[80px] border border-gray-50/50"
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="w-11 h-11 object-contain mb-2 hover:scale-110 transition-transform duration-200 drop-shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}