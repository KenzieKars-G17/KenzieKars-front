import Banner from "../banner";
import Navbar from "./navbar";

const Header = () => {
  const path: string = window.location.pathname;

  if (path == "/login" || path == "/register") {
    return (
      <header>
        <Navbar></Navbar>
      </header>
    );
  }

  return (
    <header>
      <Navbar></Navbar>
      <Banner />
    </header>
  );
};

export default Header;
