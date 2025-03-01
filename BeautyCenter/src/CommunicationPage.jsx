import React from "react";
import {
  FaPhone,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa"; 

export default function CommunicationPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="space-y-4 p-6 bg-red-50 rounded-lg shadow-lg">
        <div className="flex flex-col space-y-4 items-center">
          <a
            href="tel:+905330451099"
            className="text-sm flex items-center space-x-2 hover:text-gray-400 font-semibold"
          >
            <FaPhone />
            <span className="text-xl">Bizi Arayın </span>
          </a>

          <a
            href="mailto:birsencagdaguzelliksalonu@outlook.com"
            className="text-sm flex items-center space-x-2 hover:text-gray-400 font-semibold"
          >
            <FaEnvelope />
            <span className="text-xl">E-posta </span>
          </a>

          <a
            href="https://www.instagram.com/birsencagdas.estetikveguzellik/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm flex items-center space-x-2 hover:text-gray-400 font-semibold font-serif"
          >
            <FaInstagram className="h-6 w-6" />
            <span className="text-xl">Instagram</span>
          </a>

          <a
            href="https://maps.app.goo.gl/dqHZz8JerCD5NVY17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm flex items-center space-x-2 hover:text-gray-400 font-semibold font-serif"
          >
            <FaMapMarkerAlt className="h-6 w-6" />
            <span className="text-xl">Google Maps</span>
          </a>
        </div>
      </div>
    </div>
  );
}
