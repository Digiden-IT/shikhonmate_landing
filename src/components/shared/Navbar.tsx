import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/shikhonmate_logo.png";

const Navbar = () => {
  return (
    <nav className="container mx-auto ">
      <div className="flex justify-between items-center py-4">
        <div className="logo">
          <Image src={logo} alt="Shikhonmate" className="w-36" />
        </div>
        <div>
          <Link href={"#contact"} className="btn2">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
