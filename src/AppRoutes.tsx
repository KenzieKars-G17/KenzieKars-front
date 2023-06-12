import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import { FilterProvider } from "./contexts/filter.context";
import { HomePageProvider } from "./contexts/homepage.context";
import { AuthProvider } from "./contexts/auth.context";

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <HomePageProvider>
          <FilterProvider>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
            </Routes>
          </FilterProvider>
        </HomePageProvider>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
