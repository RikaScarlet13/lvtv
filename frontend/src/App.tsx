import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import AdminLoginPage from "./pages/admin/LoginPage";
import Header from "./components/admin/Header";

// const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? children : <LoginPage />;
// };

const App = () => {
  // const location = useLocation(); // Step 1: Get the current location

  // const isAdminRoute = location.pathname.startsWith("/admin"); // Step 2: Check if it's an admin route
  return (
    <Router>
      {/* <Navbar /> */}
      {/* {!isAdminRoute && <Navbar />} */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/admin/login" element={<AdminLoginPage />} />

        {/* MOVE TO PROTECTED ROUTES */}

        <Route path="/home" element={<HomePage />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        {/* <Route path="/admin/dashboard" element={<Header />} /> */}

        {/* END MOVE TO PROTECTED ROUTES */}
        <Route
          path="/app"
          element={
            <AuthProvider>
              <ProtectedRoutes />
            </AuthProvider>
          }
        />
        {/* <Route path="/admin/login" element={<AdminLoginPage />} /> */}
      </Routes>
    </Router>
  );
};

const ProtectedRoutes = () => {
  return <Routes>{/* Add more authenticated routes here */}</Routes>;
};

export default App;
