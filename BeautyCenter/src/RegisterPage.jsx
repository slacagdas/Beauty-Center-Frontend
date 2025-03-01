import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Admin } from "./Admin";
export default function RegisterPage() {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [today, setToday] = useState("");
  const [minDate, setMinDate] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Bugünün tarihi
    const todayDate = new Date().toISOString().split("T")[0];
    setToday(todayDate);

    // 100 yıl önceki tarih
    const hundredYearsAgo = new Date();
    hundredYearsAgo.setFullYear(hundredYearsAgo.getFullYear() - 100);
    const minDateValue = hundredYearsAgo.toISOString().split("T")[0];
    setMinDate(minDateValue);
  }, []);

  const onSubmit = (data) => {
    const registrationData = { ...data, isAdmin: false };
    axios
      .post("https://localhost:7051/api/User/register", registrationData)
      .then((response) => {
        console.log("Registration successful", response.data);
        setIsError(false);
        navigate("/Login");
      })
      .catch((error) => {
        console.error("There was an error registering!", error);
        if (error.response && error.response.data) {
          const errorData = error.response.data;
          const messages = errorData.errors
            ? Object.values(errorData.errors).flat().join(" ")
            : "There was an error registering! Please try again.";
          setErrorMessage(messages);
        } else {
          setErrorMessage("There was an error registering! Please try again.");
        }
        setIsError(true);
      });
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        className="bg-red-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4 form-control">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 border-red-300"
            htmlFor="userName"
          >
            Ad
          </label>
          <input
            className="shadow appearance-none border rounded w-full border-red-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userName"
            type="text"
            placeholder="Name"
            {...register("Name", { required: true })}
          />
          {errors.Name && (
            <span className="text-red-500 text-xs">İsminizi giriniz</span>
          )}
        </div>

        <div className="mb-4 form-control">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="userSurname"
          >
            Soyad
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-200"
            id="userSurname"
            type="text"
            placeholder="Surname"
            {...register("Surname", { required: true })}
          />
          {errors.Surname && (
            <span className="text-red-500 text-xs">Soyisminizi giriniz</span>
          )}
        </div>

        <div className="mb-4 form-control">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-200"
            id="Email"
            type="text"
            placeholder="Email"
            {...register("Email", { required: true })}
          />
          {errors.Email && (
            <span className="text-red-500 text-xs">Email adresinizi giriniz</span>
          )}
        </div>

        <div className="mb-4 form-control">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="PhoneNumber"
          >
            Telefon Numarası
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-200"
            id="PhoneNumber"
            type="text"
            placeholder="Phone Number"
            {...register("PhoneNumber", { required: true })}
          />
          {errors.PhoneNumber && (
            <span className="text-red-500 text-xs">
             Telefon numaranızı giriniz
            </span>
          )}
        </div>

        <div className="mb-4 form-control">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="userBirthdate"
          >
            Doğum Tarihi
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1 block w-full p-2 border border-red-200 rounded-md"
            id="userBirthdate"
            type="date"
            onChange={(e) => setAppointmentDate(e.target.value)}
            placeholder="yyyy-MM-dd"
            {...register("Birthdate", { required: true })}
            //value={appointmentDate}
            max={today}
            min={minDate}
          />
          {errors.Birthdate && (
            <span className="text-red-500 text-xs">Doğum tarihi giriniz</span>
          )}
        </div>

        <div className="mb-4 form-control">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Address"
          >
            Adres
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-200"
            id="Address"
            type="text"
            placeholder="Address"
            {...register("Address", { required: true })}
          />
          {errors.Address && (
            <span className="text-red-500 text-xs">Adresinizi giriniz</span>
          )}
        </div>

        <div className="mb-6 form-control">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="userPassword"
          >
            Parola
          </label>
          <input
            className="shadow appearance-none border border-red-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline "
            id="userPassword"
            type="password"
            placeholder="******************"
            {...register("Password", { required: true })}
          />
          {errors.Password && (
            <span className="text-red-500 text-xs">Şifrenizi giriniz</span>
          )}
          <p className="text-red-500 text-xs italic">
            Lütfen bir parola belirleyin.
          </p>
        </div>

        <div className="flex items-center justify-between form-control">
          <button
            className="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Kayıt Ol
          </button>
          <Link
            to={`/login`}
            className="inline-block align-baseline font-bold text-sm text-red-300 hover:text-red-400"
          >
            Hesabınız var mı? Giriş Yapın.
          </Link>
        </div>
        {isError && (
          <p className="mt-5 text-red-500 text-xs italic">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
