import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import { FilterProvider } from "./contexts/filter.context";
import { HomePageProvider } from "./contexts/homepage.context";
import ProductPage from "./pages/product";
import RegisterPage from "./pages/register";
import { ProductPageProvider } from "./contexts/productPage.context";
import { AuthProvider } from "./contexts/auth.context";
import { AdvertisementProvider } from "./contexts/advertisements.context";
import DashboardUser from "./pages/dashboardUser";
import SendEmailResetPasswordPage from "./pages/sendEmailResetPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <AdvertisementProvider>
          <ProductPageProvider>
            <HomePageProvider>
              <FilterProvider>
                <Routes>
                  <Route path="/" element={<HomePage />}></Route>
                  <Route path="/login" element={<LoginPage />}></Route>
                  <Route path="/register" element={<RegisterPage />}></Route>
                  <Route path="/product-page" element={<ProductPage />}></Route>
                  <Route path="/user" element={<DashboardUser />}></Route>
                  <Route path="/reset-password" element={<SendEmailResetPasswordPage/>}></Route>
                  <Route path="/reset-password/:token" element={<ResetPasswordPage/>}></Route>
                </Routes>
              </FilterProvider>
            </HomePageProvider>
          </ProductPageProvider>
        </AdvertisementProvider>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
