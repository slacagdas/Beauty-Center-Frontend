import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-100 p-6 mt-20">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/"
            className=" ml-80 block mt-4 lg:inline-block lg:mt-0 	text-black  hover:text-white mr-12 font-serif  font-bold text-xl"
          >
            Anasayfa
          </Link>
          <Link
            to="/services"
            className="block mt-4 lg:inline-block lg:mt-0 	text-black  hover:text-white font-serif  text-xl font-bold mr-12 "
          >
            Hizmetler
          </Link>
         
          <Link
            to="/campaigns"
            className="block mt-4 lg:inline-block lg:mt-0 	text-black  hover:text-white font-serif text-xl font-bold mr-12"
          >
            Kampanyalar
          </Link>
          <Link
            to="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 	text-black  hover:text-white font-serif text-xl font-bold mr-12"
          >
            İletişim
          </Link>
          <Link
            to="/register"
            className="block mt-4 lg:inline-block lg:mt-0 	text-black  hover:text-white font-serif text-xl font-bold mr-12"
          >
            Kayıt Ol
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
