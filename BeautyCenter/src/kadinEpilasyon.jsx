import React from "react";

function kadinEpilasyon() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Fırsatları Kaçırma
      </h1>

      <div className="flex flex-wrap justify-center mb-8">
        <div className="m-4 max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src=""
            alt="Tüm Vücut Kadın Lazer Epilasyon"
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">
              Tüm Vücut Lazer Epilasyon
            </h2>
            <p className="text-gray-600 mb-4">
              "20 Seans Kadın Lazer: 11.500₺ yerine sadece 6.499₺!"
            </p>
          </div>
        </div>

        <div className="m-4 max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src=""
            alt="Kol ve Bacak Kadın Lazer Epilasyon"
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">
              Kol ve Bacak Kadın Lazer Epilasyon
            </h2>
            <p className="text-gray-600 mb-4">
              "15 Seans: 8.000₺ yerine sadece 3.999₺!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default kadinEpilasyon;
