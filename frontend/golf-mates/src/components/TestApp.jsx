import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./Home/WelcomeComponent";
import LoginComponent from "./LoginComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";
import SignupComponent from "./signup/SignupComponent";
import BookingComponent from "./Booking/BookingComponent";
import LandingComponent from "./landing/Landing";
import TopNavbar from "./landing/Nav/TopNavbar";
import ListOfBookings from "./Booking/ListOfBookings";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();

  if (authContext.isAuthenticated) return children;

  return <Navigate to="/" />;
}

export default function TestApp() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <TopNavbar />
          <Routes>
            <Route path="/" element={<LandingComponent />} />
            <Route path="/homePage" element={<BookingComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
            <Route path="/login" element={<LoginComponent />} />

            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponent />
                  <ListOfBookings />
                  <BookingComponent />
                </AuthenticatedRoute>
              }
            />

            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            />

            <Route path="*" element={<ErrorComponent />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
