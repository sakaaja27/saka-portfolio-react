import FeaturesProject from "./FeaturesProject/Features";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/GlassNav";
import TechStack from "./TechStack/indexTech";

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechStack />
      <FeaturesProject />
      
    </div>
  );
}


