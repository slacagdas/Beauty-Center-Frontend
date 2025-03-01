import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const AppointmentRequest = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z2p7vei", 
        "template_n1fzhzh", 
        form.current,
        "k9SY6FSKxX2Jz0Zyv" 
      )
      .then(
        () => {
          setStatus("SUCCESS");
          form.current.reset();
          setShowModal(true); 
        },
        (error) => {
          setStatus("FAILED");
          console.error("FAILED...", error.text);
        }
      );
  };

  const closeModal = () => {
    setShowModal(false); 
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Randevu Talebi Oluştur</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label htmlFor="user_name" className="block text-gray-700">
            İsim
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="user_surname" className="block text-gray-700">
            Soyisim
          </label>
          <input
            type="text"
            name="user_surname"
            id="user_surname"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="user_phone" className="block text-gray-700">
            Telefon Numarası
          </label>
          <input
            type="text"
            name="user_phone"
            id="user_phone"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="user_email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700">
            Mesaj
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            rows="4"
            required
          />
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="Gönder"
            className="px-4 py-2 bg-red-200 text-white rounded hover:bg-red-400"
          />
        </div>
      </form>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal} 
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg w-96"
            onClick={(e) => e.stopPropagation()} 
          >
            <h3 className="text-lg font-semibold text-center text-green-500">
              Randevu Talebiniz Alınmıştır!
            </h3>
            <p className="text-center mt-4 text-gray-700">
              Mesajınız başarıyla gönderildi.
            </p>
            <div className="text-center mt-6">
              <button
                onClick={closeModal}
                className="bg-red-300 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Failure message */}
      {status === "FAILED" && (
        <p className="text-red-500 text-center mt-4">
          Mesajınız gönderilemedi. Lütfen tekrar deneyin.
        </p>
      )}
    </div>
  );
};

export default AppointmentRequest;
