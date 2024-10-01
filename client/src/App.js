import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Appointment from "./components/Appointment/Appointment";
import AppointmentForm from "./components/Appointment/AppointmentForm";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="appointment-form" element={<AppointmentForm />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
