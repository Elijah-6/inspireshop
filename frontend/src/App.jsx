import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  return (
    <>
      <ToastContainer />
      <div className="relative bg-gray-900">
        <div className="flex">
        <Navigation />
        </div>
      </div>
      <main className="py-3 h-[100vh]">
        <Outlet />
      </main>
    </>
  );
};

export default App;