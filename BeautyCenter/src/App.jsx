import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Hizmetler from "./Hizmetler";
import CampaignPage from "./CampaignPage";
import CommunicationPage from "./CommunicationPage";
import RegisterPage from "./RegisterPage";
import Login from "./Login";
import { AppointmentRequest } from "./AppointmentRequest";
import LazerEpilasyon from "./LazerEpilasyon";
import CiltBakimi from "./CiltBakimi";
import KozmetikUygulamalar from "./KozmetikUygulamalar";
import ElveAyakBakimi from "./ElveAyakBakimi";
import BolgeselincelmeveG5 from "./BolgeselincelmeveG5";
import ProfilePage from "./ProfilePage";

import CreateAppointmentPage from "./CreateAppointmentPage";
import { AuthProvider } from "./AuthContext";
import MyAppointmentsPage from "./MyAppointmentPage";
import { Admin } from "./Admin";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
       
        <Route path="/Hizmetler" element={<Hizmetler />} />
        <Route path="/CampaignPage" element={<CampaignPage />} />
        <Route path="/CommunicationPage" element={<CommunicationPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AppointmentRequest" element={<AppointmentRequest />} />
        <Route path="/LazerEpilasyon" element={<LazerEpilasyon />} />
        <Route path="/CiltBakimi" element={<CiltBakimi />} />
        <Route path="/KozmetikUygulamalar" element={<KozmetikUygulamalar />} />
        <Route path="/ElveAyakBakimi" element={<ElveAyakBakimi />} />
        <Route path="/BolgeselincelmeveG5" element={<BolgeselincelmeveG5 />} />
        <Route path="/MyAppointmentsPage" element={<MyAppointmentsPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/Admin" element={<Admin />} />
        <Route
          path="/CreateAppointmentPage"
          element={<CreateAppointmentPage />}
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
