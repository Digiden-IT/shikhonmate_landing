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
        {/* <div className="main-menu hidden md:flex gap-4 md:gap-6 lg:gap-8 xl:gap-9 2xl:gap-10 bg-[#F2F9FF] px-4 py-2 rounded-full">
          {mainMenu.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              className=" px-4 py-1 rounded-full"
            >
              {item.name}
            </Link>
          ))}
        </div> */}
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
