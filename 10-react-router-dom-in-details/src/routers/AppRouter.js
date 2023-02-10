import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import PaymentsPage from "../pages/PaymentsPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import CategoriesRouter from "./CategoriesRouter";
import useAuth from "../auth/useAuth";

export default function AppRouter() {
  const auth = useAuth();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact="true" path="/about" element={<AboutPage />} />
        <Route exact="true" path="/contact" element={<ContactPage />} />
        <Route exact="true" path="/" element={<HomePage />} />
        <Route exact="true" path="/profile/:username" element={<ProfilePage />} />
        <Route path="/signin" element={<LoginPage />} />
        {/* public routes */}
        <Route exact="true" path="/login" element={!auth.isLogged() ? <LoginPage /> : <DashboardPage />} />
        <Route exact="true" path="/register" element={<RegisterPage />} />
        <Route exact="true" path="/dashboard" element={!auth.isLogged() ? <LoginPage /> : <DashboardPage />} />
        {/* private routes */}
        <Route exact="true" path="/dashboard" element={!auth.isLogged() ? <LoginPage from="/dashboard" /> : <DashboardPage />} />
        <Route exact="true" path="/payments" element={!auth.isLogged() ? <LoginPage from="/payments" /> : <PaymentsPage />} />

        {/* <PublicRoute exact="true" path="/login" component={LoginPage} />
        <PublicRoute exact="true" path="/register" component={RegisterPage} />

        <PrivateRoute exact="true" path="/dashboard" component={DashboardPage} />

        <PrivateRoute exact="true" path="/payments" component={PaymentsPage} /> */}

        <Route path="/404" component={<NotFoundPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}


