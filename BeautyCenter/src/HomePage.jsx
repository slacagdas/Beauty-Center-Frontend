import React from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
function HomePage() {
  return (
    <div className="relative flex justify-center items-center bg-white min-h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/src/images/bgk.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>

      <div className="mr-11 mt-4 text-lg w-1/2 z-10">
        <Link to="Login">
          <button className="ml-0 mr-96 hover:bg-red-200 bg-red-100 p-4 m-3 font-semibold font-serif rounded-lg">
            Giriş Yap
          </button>
        </Link>
        <Link to="RandevuTalebi">
          {" "}
          <button className="ml-0 mr-96 hover:bg-red-200 bg-red-100 p-4 m-2 font-semibold font-serif rounded-lg">
            Randevu Talebi Oluştur
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
