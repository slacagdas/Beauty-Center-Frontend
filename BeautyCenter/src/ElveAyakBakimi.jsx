import React from "react";

function ElveAyakBakimi() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">
        "El ve Ayak Bakımında Şıklığı Yakalayın! Uzun Süreli Temizlik ve
        Rahatlık İçin Şimdi Özel İndirimlerimizle Tanışın!"
      </h1>

      <div className="flex flex-wrap justify-center">
        <div className="m-4 max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/proteztırnak.jpg"
            alt="Protez Tırnak + Manikür"
            className="w-full h-62 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">
              Protez Tırnak + Manikür
            </h2>
            <p className="text-gray-600 mb-4">
              "Şimdi İndirimli Fiyatlarla! Üstelik Manikür ve 2 Nailart
              Hediyemizle!"
            </p>
          </div>
        </div>

        <div className="m-4 max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/elkalıcıoje.jpg"
            alt="Jel Güçlendirme ile Kalıcı Oje"
            className="w-full h-62 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">
              Jel Güçlendirme ile Kalıcı Oje + Manikür
            </h2>
            <p className="text-gray-600 mb-4">
              "Göz Kamaştırıcı Renkler ve Uzun Süre Kalıcı!"
            </p>
          </div>
        </div>

        <div className="m-4 max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/ayakoje.jpg"
            alt="Ayak Kalıcı Oje + Pedikür"
            className="w-full h-62 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">
              Ayak Kalıcı Oje + Pedikür
            </h2>
            <p className="text-gray-600 mb-4">
              "Uzun Süre Kalıcı Renklerle Ayaklarınıza Zarafet Katın!"
            </p>
          </div>
        </div>

        <div className="m-4 max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="src/imagesweb/manicur.jpg" alt="Manikür" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Manikür</h2>
            <p className="text-gray-600 mb-4">
              "Uzun Süre Kalıcı Temizlik ve Rahatlatıcı Masaj! Şimdi İndirimli!"
            </p>
          </div>
        </div>

        <div className="m-4 max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="src/imagesweb/pedicur.jpg" alt="Pedikür" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Pedikür</h2>
            <p className="text-gray-600 mb-4">
              "Pedikür ve Rahatlatıcı Masaj Dahil, Ayaklarınıza Ferahlık ve Göz
              Alıcılık Kazandırın!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElveAyakBakimi;
