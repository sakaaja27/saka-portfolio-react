import TechStack from "./TechStack/indexTech";
import FeaturesProject from "./FeaturesProject/indexFeature";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/GlassNav";
import About from "./About/About";

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <FeaturesProject />
      <ContactMe />
    </div>
  );
}

function ContactMe() {
  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-b from-black- to-blue-900 text-white overflow-hidden">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Hubungi Saya</h1>
        <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
          Hubungi saya jika ingin berkolaborasi proyek
        </p>
      </div>
    </div>
  );
}
