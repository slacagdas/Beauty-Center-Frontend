import React from "react";
import { FaPhone, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-white text-black p-4 fixed top-0 left-0 w-full z-50 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xl font-bold font-serif">
            <img src="src/imagesweb/logo.png" alt="Logo" className="  h-24 w-24 -ml-20" />
            <span className="ml-10 ">Birsen Çağdaş Estetik ve Güzellik</span> 
          </div>

          <div className="flex space-x-4 items-center">
            <a
              href="tel:+905330451099"
              className="text-sm flex items-center space-x-2 hover:text-gray-400 font-semibold"
            >
              <FaPhone />
              <span className="hidden xl:block xl:text-xl">Bizi Arayın:</span>
              +90 533 045 1099
            </a>
            <a
              href="https://www.instagram.com/birsencagdas.estetikveguzellik/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gray-400 font-semibold font-serif"
            >
              <FaInstagram className="h-6 w-6" />
              <span className="hidden xl:block xl:text-xl">Instagram</span>
            </a>
            <a
              href="https://maps.app.goo.gl/dqHZz8JerCD5NVY17"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gray-400 font-semibold font-serif"
            >
              <FaMapMarkerAlt className="h-6 w-6" />
              <span className="hidden xl:block xl:text-xl">Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
