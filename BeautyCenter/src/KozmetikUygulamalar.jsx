import React from "react";

function KozmetikUygulamalar() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Kozmetik Uygulamalar
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="src/imagesweb/ipekkirpik.jpg" alt="İpek Kirpik" className="w-full h-68 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">İpek Kirpik</h2>
            <p className="text-gray-600 mb-4">
              "Bakışlarınıza Büyüleyici Derinlik ve Göz Alıcı Şıklık Katın!"
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="src/imagesweb/lifting.jpg" alt="Lifting" className="w-full h-68 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Lifting</h2>
            <p className="text-gray-600 mb-4">
              "Bakışlarınıza Taze Bir Görünüm Kazandırın!"
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/kaşlam.jpg"
            alt="Kaş Laminasyonu"
            className="w-full h-68 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Kaş Laminasyonu</h2>
            <p className="text-gray-600 mb-4">
              " Kaşlarınıza Şekil Verin ve Mükemmel Bir Görünüm Kazandırın!"
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/kıltek.jpg"
            alt="Microblading Kaş İşlemi"
            className="w-full h-68 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">
              Microblading Kaş İşlemi
            </h2>
            <p className="text-gray-600 mb-4">
              " Kaşlarınıza Büyüleyici Bir Şekil ve Uzun Süreli Güzellik
              Kazandırın!"
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/eyeliner.jpg"
            alt="Dipliner ve Eyeliner"
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">
              Dipliner ve Eyeliner
            </h2>
            <p className="text-gray-600 mb-4">
              " Gözlerinize Uzun Süre Kalıcı ve Etkileyici Bir Dokunuş Ekleyin!"
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/dudakrenk.jpg"
            alt="Dudak Renklendirme"
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Dudak Renklendirme</h2>
            <p className="text-gray-600 mb-4">
              "Dudaklarınıza Uzun Süre Kalıcı ve Çarpıcı Bir Renk Katın!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KozmetikUygulamalar;
