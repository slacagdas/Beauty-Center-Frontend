import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext"; 

const ProfilePage = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const Id = localStorage.getItem("Id");
  const userInfo = localStorage.getItem("userInfo");
  useEffect(() => {
    console.log(userInfo);
    if (userInfo) {
      const fetchProfile = async () => {
        console.log(Id);
        try {
          const response = await axios.get(
            `https://localhost:7051/api/User/${Id}`
          );
          console.log(response.data); 
          setProfile(response.data);
        } catch (error) {
          console.error("Error fetching profile data", error);
          setError("Profil bilgilerini alırken bir hata oluştu.");
        }
      };

      fetchProfile();
    } else {
      setError("Kullanıcı bilgileri mevcut değil veya geçersiz.");
    }
  }, [user]);

  if (error) return <div>{error}</div>;
  if (!profile) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profilim</h1>
      <div className="space-y-4">
        <div>
          <strong>İsim:</strong> {profile.name}
        </div>
        <div>
          <strong>Soyisim:</strong> {profile.surname}
        </div>
        <div>
          <strong>Email:</strong> {profile.email}
        </div>
        <div>
          <strong>Adres:</strong> {profile.address}
        </div>
        <div>
          <strong>Telefon:</strong> {profile.phoneNumber}
        </div>
        <div>
          <strong>Doğum Tarihi:</strong>{" "}
          {new Date(profile.birthDate).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
