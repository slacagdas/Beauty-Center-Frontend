import React from "react";
import { Link } from "react-router-dom";

function LazerEpilasyon() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Lazer Epilasyon Hizmetleri
      </h1>

      <div className="flex flex-wrap justify-center">
        <div className="m-4 max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
         
            <img
              src="src/imagesweb/lazerkadın.jpg"
              alt="Kadın Lazer Epilasyon"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">
                Kadın Lazer Epilasyon
              </h2>
              <p className="text-gray-600 mb-4">
                "Kadınlar için özel lazer epilasyon hizmetlerimiz hakkında
                detayları öğrenin."
              </p>
             
            </div>
         
        </div>

        <div className="m-4 max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
         
            <img
              src="src/imagesweb/erkeklazer.jpg"
              alt="Erkek Lazer Epilasyon"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">
                Erkek Lazer Epilasyon
              </h2>
              <p className="text-gray-600 mb-4">
                "Erkekler için özel lazer epilasyon hizmetlerimiz hakkında
                detayları öğrenin."
              </p>
         
            </div>
       
        </div>
      </div>
    </div>
  );
}

export default LazerEpilasyon;
