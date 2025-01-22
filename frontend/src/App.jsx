import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowRight } from "react-icons/fa";

const App = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <ToastContainer />
      <div className="relative">
        <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50">
          <button
            onClick={toggleNavVisibility}
            className="bg-pink-600 text-white p-2 rounded-r-full focus:outline-none opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            {!isNavVisible && <FaArrowRight/>}
          </button>
        </div>
        {isNavVisible && 
        <div className="flex">
        <Navigation />
        </div>
        }
      </div>
      <main className="py-3">
        <Outlet />
      </main>
    </>
  );
};

export default App;