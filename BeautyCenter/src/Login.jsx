import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(""); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setErrorMessage(""); 

    axios
      .post("https://localhost:7051/api/User/login", data)
      .then((response) => {
        const user = response.data;

        console.log("Logging in successful");
        localStorage.setItem("userInfo", JSON.stringify(user));
        localStorage.setItem("isAdmin", user.isAdmin);
        localStorage.setItem("Id", user.id);
        localStorage.setItem("token", user.token);
        auth.login(user);
        navigate("/");
      })
      .catch((error) => {
        console.error(
          "There was an error logging in!",
          error.response ? error.response.data : error.message
        );
        setErrorMessage(
          error.response?.data?.message || "Giriş işlemi başarısız. Lütfen tekrar deneyin."
        );
      });
  };

  return (
    <div className="relative flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src="/src/images/nudepinkbg.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Hesabınıza giriş yapınız
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          {errorMessage && ( 
            <div className="text-center text-sm text-red-600">{errorMessage}</div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-200 sm:text-sm sm:leading-6"
                {...register("email", { required: true })}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Parola
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-black hover:text-dark-cream"
                >
                  Parolanızı mı unuttunuz?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-200 sm:text-sm sm:leading-6"
                {...register("password", { required: true })}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-200 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-200"
            >
              Giriş Yap
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Hesabınız yok mu?
          <a
            href="RegisterPage"
            className="ml-2 font-semibold leading-6 text-black hover:text-red-500"
          >
            Kayıt Olun
          </a>
        </p>
      </div>
    </div>
  );
}
