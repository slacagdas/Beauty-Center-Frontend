import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import Hizmetler from "./Hizmetler";
import CampaignPage from "./CampaignPage";
import CommunicationPage from "./CommunicationPage";
import RegisterPage from "./RegisterPage";
import Navbar from "./Navbar"
import Login from "./Login";
import RandevuTalebi from "./RandevuTalebi";
function App() {
  return (
    <div>
       <Header />
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Hizmetler" element={<Hizmetler />} />
        <Route path="/CampaignPage" element={<CampaignPage />} />
        <Route path="/CommunicationPage" element={<CommunicationPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/RandevuTalebi" element={<RandevuTalebi />} />
      </Routes>
    </div>
  );
}

export default App;
