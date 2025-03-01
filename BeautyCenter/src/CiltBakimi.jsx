import React from "react";

function CiltBakimi() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Cilt Bakımı Hizmetleri
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="m-4 max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/hydrajpg.jpg"
            alt="Hydrafacial"
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">
              Hydrafacial Cilt Bakımı
            </h2>
            <p className="text-gray-600 mb-4">
              "HydraFacial, cildinize derinlemesine temizlik ve nemlendirme
              sağlayarak, genç ve taze bir görünüm kazandırır. Özel teknolojisi
              ile cildinizdeki ölü hücreleri arındırırken, besleyici serumları
              doğrudan cildinize uygulayarak etkili ve yenileyici bir bakım
              sunar."
            </p>
          </div>
        </div>

        <div className="m-4 max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/medikal.jpg"
            alt="Medikal Cilt Bakımı"
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Medikal Cilt Bakımı</h2>
            <p className="text-gray-600 mb-4">
              "Medikal cilt bakımı, cildinizin sağlık sorunlarını hedefler ve
              profesyonel sonuçlar elde etmenizi sağlar."
            </p>
          </div>
        </div>

        <div className="m-4 max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/imagesweb/procilt.jpg"
            alt="Profosyonel Cilt Bakımı"
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">
              Profosyonel Cilt Bakımı
            </h2>
            <p className="text-gray-600 mb-4">
              "Profesyonel cilt bakımı, cildinizin genel sağlığını ve görünümünü
              iyileştirmek için uzman ellerden aldığı özel bir bakımdır. Cilt
              tipinize ve ihtiyaçlarınıza göre kişiselleştirilmiş uygulamalarla,
              derinlemesine temizlik, nemlendirme ve yenileme sağlar. Uzman
              estetisyenler tarafından yapılan bu bakım, cildinizin genç ve
              canlı görünmesini destekler."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CiltBakimi;
