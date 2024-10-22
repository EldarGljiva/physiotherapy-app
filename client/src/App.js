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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Services from "./components/Services/Services";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/home" element={<PrivateRoute element={<Home />} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/appointment"
              element={<PrivateRoute element={<Appointment />} />}
            />
            <Route
              path="appointment-form"
              element={<PrivateRoute element={<AppointmentForm />} />}
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <ToastContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
