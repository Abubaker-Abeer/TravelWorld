import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ProtectedRoute from "./ProtectedRoute";
import About from "../pages/About";
import Tours from "../pages/Tours";
import MoreTours from "../pages/MoreTours";
import TourDetails from "../components/TourDetails/TourDetails";
import BookingConfirmation from "../pages/BookingConfirmation";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/more-tours" element={<MoreTours />} />
      <Route path="/tours/:country" element={<TourDetails />} />
<Route
  path="/booking-confirmation"
element={<BookingConfirmation />} 
/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default Routers;
