import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import { FilterProvider } from "./contexts/filter.context";
import { HomePageProvider } from "./contexts/homepage.context";
import ProductPage from "./pages/product";
import { ProductPageProvider } from "./contexts/productPage.context";
import { AuthProvider } from "./contexts/auth.context";
import { AdvertisementProvider } from "./contexts/advertisements.context";

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
                  <Route path="/product-page" element={<ProductPage />}></Route>
                </Routes>
              </FilterProvider>
            </HomePageProvider>
          </ProductPageProvider>
        </AdvertisementProvider>
      </AuthProvider>

    </Router >
  );
};

export default AppRoutes;
