import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function Header() {
  return (
    <div className="bg-white 	text-black  py-6 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold font-serif">
            <img
              src="BeautyCenter/src/images/0QvVCa-LogoMakr.webp"
              alt="Birsen Çağdaş Estetik ve Güzellik"
              className="h-8 inline-block"
            />
          </div>
          <div className="flex space-x-4 items-center">
            <a
              href="tel:+905435931168"
              className="text-sm flex items-center space-x-2 hover:text-gray-400 font-semibold"
            >
              <FaPhone />
              <span>Bizi Arayın: </span>+90 543 593 1168
            </a>
            <a
              href="https://www.instagram.com/birsencagdas.estetikveguzellik/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gray-400 font-semibold font-serif"
            >
              <FaInstagram className="h-6 w-6" />
              <span>Instagram</span>
            </a>
            <a
              href="https://maps.app.goo.gl/dqHZz8JerCD5NVY17"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gray-400 font-semibold font-serif"
            >
              <FaMapMarkerAlt className="h-6 w-6" />
              <span>Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
