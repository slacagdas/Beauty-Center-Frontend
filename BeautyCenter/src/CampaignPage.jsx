import React from "react";

function CampaignPage() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Fırsatları Kaçırma
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
     
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/epilasyon2.jpg"
            alt="Tüm Vücut Kadın Lazer Epilasyon"
            className="w-full h-68 object-cover"
          />
          <div className="p-4 ">
            <h2 className="text-2xl font-semibold mb-2">
              Tüm Vücut Lazer Epilasyon
            </h2>
            <p className="text-gray-600 mb-4">
              "20 Seans Kadın Lazer: 11.500₺ yerine sadece 6.499₺!"
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/erkeklazer.jpg"
            alt="Kemer Üstü Erkek Lazer"
            className="w-full h-68 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">
              Kemer Üstü Erkek Lazer
            </h2>
            <p className="text-gray-600 mb-4">
              "20 Seans: 12.500₺ yerine sadece 8.499₺!"
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/erkekepi2.jpg"
            alt="Kemer Üstü + Bacak Bölgesi Epilasyon"
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">
              Kemer Üstü + Bacak Bölgesi Epilasyon
            </h2>
            <p className="text-gray-600 mb-4">
              "20 Seans Erkek : 15.000₺ yerine sadece 9.499₺!"
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
     
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/protez2.jpg"
            alt="Protez Tırnak + Manikür"
            className="w-full h-68 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">
              Protez Tırnak + Manikür
            </h2>
            <p className="text-gray-600 mb-4">
              "%20 İndirimle! 1.000₺ yerine sadece 799₺! Manikür ve 2 Nailart
              Hediyemizdir."
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/kalıcı0je2.jpg"
            alt="Jel Güçlendirme ile Kalıcı Oje"
            className="w-full h-68 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">
              Jel Güçlendirme ile Kalıcı Oje + Manikür
            </h2>
            <p className="text-gray-600 mb-4">
              "800₺ Yerine Sadece 499₺! Manikür ve 2 Nailart Hediye!"
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/ayakkalıcı2.jpg"
            alt="Ayak Kalıcı Oje"
            className="w-full h-68 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">
              Ayak Kalıcı Oje + Pedikür
            </h2>
            <p className="text-gray-600 mb-4">
              "Şimdi %25 İndirimle! 800₺ Yerine Yalnızca 599₺ ile Ayaklarınıza
              Şıklık Katın!"
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
   
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="src/imagesweb/manikür2.jpg" alt="Manikür" className="w-full h-68 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Manikür</h2>
            <p className="text-gray-600 mb-4">
              "450₺ Yerine Sadece 250₺! Hem Temizlik Hem de Rahatlatıcı Masajın
              Keyfini Yaşayın!"
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="src/imagesweb/pedikür2.jpg" alt="Pedikür" className="w-full h-68 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Pedikür</h2>
            <p className="text-gray-600 mb-4">
              "600₺ Yerine Sadece 399₺! Hem Şıklık Hem de Rahatlatıcı Masajın
              Keyfini Çıkarın!"
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="src/imagesweb/ipekkirpik2.jpg" alt="İpek Kirpik" className="w-full h-68 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">İpek Kirpik</h2>
            <p className="text-gray-600 mb-4">
              "1200₺ Yerine Yalnızca 799₺! Bakışlarınıza Büyüleyici Derinlik ve
              Göz Alıcı Şıklık Katın!"
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {/* Diğer Teklifler - 2 */}
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="src/imagesweb/lifting2.jpg" alt="Lifting" className="w-full h-68 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Lifting</h2>
            <p className="text-gray-600 mb-4">
              "650₺ Yerine Sadece 399₺! Bakışlarınıza Taze Bir Görünüm
              Kazandırın!"
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/microkıl.jpg"
            alt="Microblading Kaş İşlemi"
            className="w-full h-68 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">
              Microblading Kaş İşlemi
            </h2>
            <p className="text-gray-600 mb-4">
              "4500₺ Yerine Yalnızca 2999₺! Kaşlarınıza Büyüleyici Bir Şekil
              Kazandırın!"
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/eyeliner2.jpg"
            alt="Dipliner ve Eyeliner"
            className="w-full h-68 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">
              Dipliner ve Eyeliner
            </h2>
            <p className="text-gray-600 mb-4">
              "4500₺ Yerine Yalnızca 2999₺! Gözlerinizi Ön Plana Çıkaran Kalıcı
              Bir Dokunuş!"
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {/* Son İki Teklif */}
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden ">
          <img
            src="src/imagesweb/kaşlam2.jpg"
            alt="Kaş Laminasyonu"
            className="w-full h-68 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Kaş Laminasyonu</h2>
            <p className="text-gray-600 mb-4">
              "400₺ Yerine Yalnızca 249₺! Kaşlarınıza Şekil ve Dolgunluk Katın!"
            </p>
          </div>
        </div>

        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/dudak2.jpg"
            alt="Dudak Renklendirme"
            className="w-full h-68 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Dudak Renklendirme</h2>
            <p className="text-gray-600 mb-4">
              "1500₺ Yerine Sadece 999₺! Dudaklarınıza Kalıcı Bir Renk Katın!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignPage;
