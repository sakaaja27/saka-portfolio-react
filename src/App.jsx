import Hero from "./Hero/Hero";
import Navbar from "./Navbar/GlassNav";
import Beams from "./widget/BeamsBackground";


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



