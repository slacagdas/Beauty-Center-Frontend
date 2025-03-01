import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { VscAccount } from "react-icons/vsc";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <nav className="bg-red-100 p-6 mt-32 relative z-60 ">
      <div className="flex items-center justify-between">
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black hover:text-white text-2xl"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <div
          className={`lg:flex lg:items-center lg:w-auto ${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <div className="flex items-center flex-shrink-0 text-black">
            <Link
              to="/"
              className="block lg:inline-block lg:mt-0 text-black hover:text-white font-serif text-xl font-bold mr-12"
            >
              Anasayfa
            </Link>
          </div>
          <div className="block lg:inline-block lg:mt-0 text-black hover:text-white font-serif text-xl font-bold mr-12">
            <Link
              to="/Hizmetler"
              className="text-black hover:text-white"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              Hizmetler
            </Link>
            {showServicesDropdown && (
              <ul
                className="absolute left-0 w-80 bg-white shadow-lg rounded-md z-50"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(true)}
              >
                <li>
                  <Link
                    to="/LazerEpilasyon"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Lazer Epilasyon
                  </Link>
                </li>
                <li>
                  <Link
                    to="/CiltBakimi"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Cilt Bakımı
                  </Link>
                </li>
                <li>
                  <Link
                    to="/KozmetikUygulamalar"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Kozmetik Uygulamalar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ElveAyakBakimi"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    El ve Ayak Bakımı
                  </Link>
                </li>
                <li>
                  <Link
                    to="/BolgeselincelmeveG5"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Bölgesel İncelme ve G5
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link
            to="/CampaignPage"
            className="block lg:inline-block lg:mt-0 text-black hover:text-white font-serif text-xl font-bold mr-12"
          >
            Kampanyalar
          </Link>
          <Link
            to="/CommunicationPage"
            className="block lg:inline-block lg:mt-0 text-black hover:text-white font-serif text-xl font-bold mr-12"
          >
            İletişim
          </Link>
          {!auth.user && (
            <Link
              to="/RegisterPage"
              className="block lg:inline-block lg:mt-0 text-black hover:text-white font-serif text-xl font-bold mr-12"
            >
              Kayıt Ol
            </Link>
          )}
          {auth.user && (
            <div
              className="relative lg:inline-block lg:mt-0 text-black hover:text-white font-serif text-xl font-bold cursor-pointer"
              onMouseEnter={() => setShowProfileDropdown(true)}
              onMouseLeave={() => setShowProfileDropdown(false)}
            >
              <VscAccount className="text-2xl inline-block mr-2" />

              {showProfileDropdown && (
                <ul
                  className="absolute left-(-8) top-full  w-48 bg-white shadow-lg rounded-md z-50"
                  onMouseEnter={() => setShowProfileDropdown(true)}
                  onMouseLeave={() => setShowProfileDropdown(false)}
                >
                  <li>
                    <Link
                      to="/ProfilePage"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={() => setShowProfileDropdown(false)}
                    >
                      Profilim
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Çıkış Yap
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
