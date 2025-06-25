import Hero from "./Hero/Hero";
import Navbar from "./Navbar/GlassNav";
import CardSwap, { Card } from "./widget/CardSwap";

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
    <div className="h-screen px-6 pt-14 bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-md">
          Features Project
        </h1>
      </div>

      <div className="mt-16 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 flex items-center">
          <h2 className="text-left md:text-left md:ml-20 lg:ml-20 px-4 text-xl sm:text-2xl font-medium text-gray-300 leading-relaxed">
            This is the latest collection of projects that I have worked on
          </h2>
        </div>

        <div className="w-full md:w-1/2 h-[380px] relative">
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-white">BumiKita</h3>
              {/* <img src="img/maripeduli.png"></img> */}
              <p className="text-sm text-gray-300">Website pemerintah BPBD</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-white">MariPeduli</h3>
               <img src="img/maripeduli.png"></img> 
              <p className="text-sm text-gray-300">Website Frontend competition UCDC 2025 Amikom Surakarta</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-white">Food Scan Health</h3>
              <p className="text-sm text-gray-300">Your content here</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-white">FlootieCook</h3>
              <p className="text-sm text-gray-300">Your content here</p>
            </Card>
          </CardSwap>
        </div>
      </div>
    </div>
  );
}
