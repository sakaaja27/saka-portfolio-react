
import TechStack from './TechStack/indexTech';
import FeaturesProject from './FeaturesProject/indexFeature';
import Hero from './Hero/Hero';
import Navbar from './Navbar/GlassNav';
import About from './About/About';

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero/>
      <About />
      <TechStack />
      <FeaturesProject />
    </div>
  );
}


