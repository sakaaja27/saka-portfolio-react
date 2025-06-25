import Beams from "./widget/BeamsBackground";
import Lanyard from "./widget/Lanyard";

export default function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={3}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="mt-4 flex space-x-5 px-6 py-3 rounded-xl shadow-md backdrop-blur-md bg-white/20 border border-white/30">
          <li>
            <a href="#" className="text-white hover:text-orange-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-orange-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-orange-400 transition">
              My Project
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-orange-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="px-6 text-white h-screen flex items-center justify-between relative overflow-hidden">
      <div className="flex-shrink-0 max-w-xl relative z-10 md:text-left md:ml-20 lg:ml-40 px-4">
        <h1 className="text-4xl font-bold">WELCOME IN MY WEBSITE</h1>
        <p className="mt-4 text-lg">I'm Saka Karna Bramasta</p>
        <p className="mt-4 text-lg">Web development</p>
      </div>

      <div className="absolute inset-0 z-50 pointer-events-none md:text-left md:ml-80 lg:ml-96 px-4">
        <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
      </div>
    </div>
  );
}

