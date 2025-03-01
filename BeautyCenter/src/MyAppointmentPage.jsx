import React, { useState, useEffect } from "react";
import axios from "axios";

const MyAppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("Id");
    if (!userId) {
      setError("Kullanıcı ID'si bulunamadı.");
      setLoading(false);
      return;
    }

    axios
      .get(`https://localhost:7051/api/Appointment/User/${userId}`)
      .then((response) => {
        setAppointments(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the appointments!", error);
        setError("Randevular yüklenirken bir hata oluştu.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
        <p className="text-lg text-gray-600">Yükleniyor...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Appointments</h2>
      {appointments.length === 0 ? (
        <p className="text-lg text-gray-600">Randevunuz bulunmuyor.</p>
      ) : (
        <ul className="space-y-6">
          {appointments.map((appointment) => (
            <li
              key={appointment.id}
              className="p-6 bg-white border border-gray-300 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <p className="text-lg font-semibold text-gray-700 mb-2">
                Randevunuz {appointment.productName}
              </p>
              <p className="text-md text-gray-600">
                Tarih: {new Date(appointment.date).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyAppointmentsPage;
