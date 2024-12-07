import Link from "next/link";
import ShimmerButton from "../ui/shimmer-button";

const Navbar = () => {
  return (
    <nav className="navbar flex items-center justify-between px-6 py-4 bg-black text-white">
      {/* Logo */}
      <div className="text-lg font-bold text-green-500">RenewablePitch</div>

      {/* Links */}
      <ul className="flex gap-6">
        <li>
          <Link href="#home" className="hover:text-green-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-green-500">
            About
          </Link>
        </li>
        <li>
          <Link href="#features" className="hover:text-green-500">
            Features
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-green-500">
            Contact
          </Link>
        </li>
      </ul>

      {/* Action Button */}
      <ShimmerButton
        shimmerColor="#00ff99"
        shimmerSize="0.1em"
        borderRadius="50px"
        shimmerDuration="3s"
        background="rgba(0, 0, 0, 1)"
      >
        Get Started
      </ShimmerButton>
    </nav>
  );
};

export default Navbar;
