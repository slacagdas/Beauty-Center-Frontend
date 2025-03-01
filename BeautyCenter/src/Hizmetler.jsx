import React from "react";
import { Link } from "react-router-dom";

function Hizmetler() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <Link to="/LazerEpilasyon">
            <img
              src="src/imagesweb/kklazer.jpg"
              alt="Lazer Epilasyon"
              className="w-full h-62 object-cover"
            />
            <div className="p-4 text-center">
              <button className="hover:bg-red-300 bg-red-100 p-4 rounded-lg block mx-auto font-semibold text-lg">
                Lazer Epilasyon
              </button>
              <p className="text-gray-700 mt-2">
                "Lazer epilasyon işlemi, istenmeyen tüylerden kalıcı olarak
                kurtulmanın güvenilir ve etkili bir yoludur."
              </p>
            </div>
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <Link to="/ElveAyakBakimi">
            <img
              src="src/imagesweb/elayakjpg.jpg"
              alt="El ve Ayak Bakım"
              className="w-full h-58 object-cover"
            />
            <div className="p-4 text-center">
              <button className="hover:bg-red-300 bg-red-100 p-4 rounded-lg block mx-auto font-semibold text-lg">
                El ve Ayak Bakımı
              </button>
              <p className="text-gray-700 mt-2">
                "Ellerinize ve ayaklarınıza lüks bir dokunuş katın."
              </p>
            </div>
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <Link to="/CiltBakimi">
            <img
              src="src/imagesweb/ciltbakimm.jpg"
              alt="Cilt Bakımı"
              className="w-full h-68 object-cover"
            />
            <div className="p-4 text-center">
              <button className="hover:bg-red-300 bg-red-100 p-4 rounded-lg block mx-auto font-semibold text-lg">
                Cilt Bakımı
              </button>
              <p className="text-gray-700 mt-2">
                "Cilt bakımı hizmetimiz, uzmanlarımızın özenli dokunuşlarıyla
                cildinizi yenileyip taze bir görünüm kazanmanıza yardımcı olur."
              </p>
            </div>
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <Link to="/KozmetikUygulamalar">
            <img
              src="src/imagesweb/kozmetik.jpg"
              alt="Kozmetik Uygulamalar"
              className="w-full h-58 object-cover"
            />
            <div className="p-4 text-center">
              <button className="hover:bg-red-300 bg-red-100 p-4 rounded-lg block mx-auto font-semibold text-lg">
                Kozmetik Uygulamalar
              </button>
              <p className="text-gray-700 mt-2">
                "Güzelliğin en yeni teknolojilerle buluştuğu yer."
              </p>
            </div>
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <Link to="/BolgeselincelmeveG5">
            <img
              src="src/imagesweb/bölgesel.jpg"
              alt="Bölgesel İncelme ve G5"
              className="w-full h-68 object-cover"
            />
            <div className="p-4 text-center">
              <button className="hover:bg-red-300 bg-red-100 p-4 rounded-lg block mx-auto font-semibold text-lg">
                Bölgesel İncelme ve G5 İşlemleri
              </button>
              <p className="text-gray-700 mt-2">
                "Bölgesel zayıflama hizmetimiz, yenilikçi teknolojiler ve uzman
                dokunuşlarıyla istediğiniz bölgelerde incelme ve şekillenme
                sağlar, vücudunuzu daha fit ve sağlıklı hissettirir."
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hizmetler;
