import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-around py-5 px-24 border-b border-gray-700 bg-black z-50">
      <Link href="/" className="transition duration-300 hover:scale-110">
        <SiNextdotjs className="w-16 h-16 text-white" />
      </Link>
      <ul className="flex gap-10 text-lg">
        <li>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/education"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            href="/experience"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
``;
