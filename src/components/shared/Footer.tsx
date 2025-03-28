import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaRegAddressBook,
} from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import logo from "@/assets/shikhonmate_logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#21295C] text-gray-50">
      <div className="container mx-auto py-16 px-6 md:px-0">
        <div className="flex justify-between flex-col md:flex-row">
          <div>
            <Image src={logo} alt="Shikhonmate" width={200} />
            <p className="flex items-center gap-2 mb-1">
              <LuMapPin size={20} /> System Imperial Complex (level-10),
              Chawkbazar, Chattagram, Bangladesh
            </p>
            <p className="flex items-center gap-2 mb-1">
              <MdMailOutline size={20} />
              info.digidenit@gmail.com
            </p>
            <p className="flex items-center gap-2 mb-1">
              <FaRegAddressBook size={20} />
              +88018438478758
            </p>
          </div>
          <div className="flex flex-col md:items-end items-start">
            <p className="text-xl font-semibold md:mb-4 mb-1 mt-4 md:mt-0 ">
              Company
            </p>
            <Link
              href={"/"}
              className="mb-1 hover:text-[#eff7ff] duration-300 hover:font-semibold"
            >
              Contact Us
            </Link>
            <Link
              href={"/"}
              className="mb-1 hover:text-[#eff7ff] duration-300 hover:font-semibold"
            >
              Privacy Policy
            </Link>
            <Link
              href={"/"}
              className="mb-1 hover:text-[#eff7ff] duration-300 hover:font-semibold"
            >
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10 flex-col-reverse md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} DigidenIT. All rights Reserved.
          </p>
          <div className="flex gap-8 mb-4 md:mb-0">
            <a href="#">
              <FaFacebookSquare size={28} />
            </a>
            <a href="">
              <FaLinkedin size={28} />
            </a>
            <a href="">
              <FaGithubSquare size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
