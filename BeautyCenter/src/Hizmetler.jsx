import React from "react";
import { Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function Hizmetler() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-4">
        <Link to="/lazer-epilasyon">
          <img
            src="lazer-epilasyon-image.jpg"
            alt="Lazer Epilasyon"
            className="mb-2"
          />
          <button className="hover:bg-red-300 bg-red-100 p-4 rounded-lg block w-full">
            Lazer Epilasyon İşlemi
          </button>
        </Link>
        <p className="text-center">
          "Lazer epilasyon işlemi, istenmeyen tüylerden kalıcı olarak
          kurtulmanın güvenilir ve etkili bir yoludur."
        </p>
      </div>

      <div className="m-4">
        <Link to="/tirnak-ve-el-bakim">
          <img
            src="tirnak-el-bakim-image.jpg"
            alt="Tırnak ve El Bakım"
            className="mb-2"
          />
          <button className="hover:bg-red-300 bg-red-100 p-4 rounded-lg block w-full">
            Tırnak ve El Bakım İşlemleri
          </button>
        </Link>
        <p className="text-center">
          "Özenle yapılan tırnak ve el bakımı ile ellerinizde sağlık ve güzellik
          buluşturuyoruz."
        </p>
      </div>

      <div className="m-4">
        <Link to="/cilt-bakimi">
          <img src="cilt-bakimi-image.jpg" alt="Cilt Bakımı" className="mb-2" />
          <button className="hover:bg-red-300 bg-red-100 p-4 rounded-lg block w-full">
            Cilt Bakımı İşlemleri
          </button>
        </Link>
        <p className="text-center">
          "Cilt bakımı hizmetimiz, uzmanlarımızın özenli dokunuşlarıyla
          cildinizi yenileyip taze bir görünüm kazanmanıza yardımcı olur."
        </p>
      </div>

      <div className="m-4">
        <Link to="/kalici-makyaj">
          <img
            src="kalici-makyaj-image.jpg"
            alt="Kalıcı Makyaj"
            className="mb-2"
          />
          <button className="hover:bg-red-300 bg-red-100 p-4 rounded-lg block w-full">
            Kalıcı Makyaj İşlemleri
          </button>
        </Link>
        <p className="text-center">
          "Kalıcı makyaj işlemimiz, doğal ve uzun süre kalıcı güzellik
          sağlayarak pratik ve şık bir görünüm elde etmenizi sağlar."
        </p>
      </div>

      <div className="m-4">
        <Link to="/bolgesel-zayiflama">
          <img
            src="bolgesel-zayiflama-image.jpg"
            alt="Bölgesel Zayıflama"
            className="mb-2"
          />
          <button className="hover:bg-red-300 bg-red-100 p-4 rounded-lg block w-full">
            Bölgesel Zayıflama İşlemleri
          </button>
        </Link>
        <p className="text-center">
          "Bölgesel zayıflama hizmetimiz, yenilikçi teknolojiler ve uzman
          dokunuşlarıyla istediğiniz bölgelerde incelme ve şekillenme sağlar,
          vücudunuzu daha fit ve sağlıklı hissettirir."
        </p>
      </div>
    </div>
  );
}

export default Hizmetler;
