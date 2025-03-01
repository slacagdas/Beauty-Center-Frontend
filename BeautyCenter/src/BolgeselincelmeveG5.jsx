import React from "react";

function BolgeselincelmeveG5() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Bölgesel İncelme ve G5
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="src/imagesweb/heykel.jpg" alt="Bölİnc" className="w-full h-68 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Heykeltraş İşlemi</h2>
            <p className="text-gray-600 mb-4">
              " Şimdi Fırsatı Yakalayın ve Vücudunuza Şekil Verin!"
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="src/imagesweb/g5.jpg" alt="Lifting" className="w-full h-60 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">G5 İşlemi</h2>
            <p className="text-gray-600 mb-4">
              Şimdi Şekil Almanın Tam Zamanı!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BolgeselincelmeveG5;
