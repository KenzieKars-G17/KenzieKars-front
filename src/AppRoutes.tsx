import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/home";
import { FilterProvider } from "./contexts/filter.context";
import { HomePageProvider } from "./contexts/homepage.context";

const AppRoutes = () => {
  return (
    <Router>
      <HomePageProvider>
        <FilterProvider>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </FilterProvider>
      </HomePageProvider>
    </Router>
  );
};

export default AppRoutes;
