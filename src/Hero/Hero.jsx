import Beams from "../widget/BeamsBackground";
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={14}
          lightColor="#0000cc"
          speed={3}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>
      <div className="px-6 text-white h-screen flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  );
}
