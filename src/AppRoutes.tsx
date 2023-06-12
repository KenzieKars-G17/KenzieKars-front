import {  BrowserRouter as Router,  Route,  Routes,  Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import { FilterProvider } from "./contexts/filter.context";
import { HomePageProvider } from "./contexts/homepage.context";
import ProductPage from "./pages/product";
import { ProductPageProvider } from "./contexts/productPage.context";

const AppRoutes = () => {
  return (
    <Router>
      <ProductPageProvider>
        <HomePageProvider>
          <FilterProvider>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/product-page" element={<ProductPage />}></Route>
            </Routes>
          </FilterProvider>
        </HomePageProvider>
      </ProductPageProvider>
    </Router>
  );
};

export default AppRoutes;
