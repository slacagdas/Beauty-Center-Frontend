import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext";

function HomePage() {
  const { user, isAdmin } = useContext(AuthContext);

  return (
    <div className="relative flex justify-center items-center bg-white min-h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/src/imagesweb/bgk.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("src/images/backgroundhomepage.jpg")' }}
      ></div>
      <div className="mr-11 mt-4 text-lg w-1/2 z-10">
        {!user ? (
          <>
            <Link to="Login">
              <button className="ml-0 mr-96 hover:bg-red-200 bg-red-100 p-4 m-3 font-semibold font-serif rounded-lg">
                Giriş Yap
              </button>
            </Link>
            <Link to="AppointmentRequest">
              <button className="ml-0 mr-96 hover:bg-red-200 bg-red-100 p-4 m-2 font-semibold font-serif rounded-lg">
                Randevu Talebi Oluştur
              </button>
            </Link>
          </>
        ) : (
          <>
            {user.isAdmin ? (
              <>
                <Link to="Admin">
                  <button className="ml-0 mr-96 hover:bg-red-200 bg-red-100 p-4 m-2 font-semibold font-serif rounded-lg">
                    Panel
                  </button>
                </Link>
              </>
            ) : (
              <>
                {" "}
                <Link to="MyAppointmentsPage">
                  <button className="ml-0 mr-96 hover:bg-red-200 bg-red-100 p-4 m-2 font-semibold font-serif rounded-lg">
                    Randevularım
                  </button>
                </Link>
                <Link to="CreateAppointmentPage">
                  <button className="ml-0 mr-96 hover:bg-red-200 bg-red-100 p-4 m-2 font-semibold font-serif rounded-lg">
                    Randevu Oluştur
                  </button>
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
