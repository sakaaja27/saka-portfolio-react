import Lanyard from "../../widget/Lanyard";
export default function RightContent() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none md:text-left md:ml-80 lg:ml-96 px-4">
      <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
    </div>
  );
}