export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="mt-4 flex space-x-5 px-6 py-3 rounded-xl shadow-md backdrop-blur-md bg-white/20 border border-white/30">
          <li>
            <a href="#" className="text-white hover:text-orange-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-orange-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-orange-400 transition">
              My Project
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-orange-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
