import Hero from "./Hero/Hero";
import Navbar from "./Navbar/GlassNav";


export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

function About() {
  return (
    <div className="px-6 text-white h-screen flex items-center justify-center relative overflow-hidden">
      <h1 className="text-4xl font-bold">About Section</h1>
      <p className="mt-4 text-lg">This is the about section of the page.</p>
    </div>
  );
}
