import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Review from "./pages/Review";

import "./index.css";

import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import QR from "./pages/QR";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route
  path="/"
  element={<Home />}
/>

<Route
  path="/r/:businessId"
  element={<Review />}
/>

        <Route
          path="/dashboard/:businessId"
          element={<Dashboard />}
        />

        <Route
          path="/onboarding"
          element={<Onboarding />}
       />

       <Route
          path="/qr/:businessId"
          element={<QR />}
       />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);