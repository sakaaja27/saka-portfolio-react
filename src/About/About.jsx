
import RightGridBottomContent from "./component/BottomRigthGrid";
import LeftGridContent from "./component/LeftGrid";
import RightGridTopContent from "./component/TopRightGrid";

export default function About() {
  return (
    <section id="about" className="pt-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-5 gap-6">
        <LeftGridContent />
        <RightGridTopContent />
        <RightGridBottomContent />
      </div>
    </section>
  );
}



