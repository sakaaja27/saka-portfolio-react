
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";

export default function Hero() {
  return (
    <div className="px-6 text-white h-screen flex items-center justify-between relative overflow-hidden">
      <LeftContent />
      <RightContent />
    </div>
  );
}




