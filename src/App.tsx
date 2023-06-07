import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/header/navbar";
import Footer from "./components/footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Footer></Footer>
    </>
  );
}

export default App;
