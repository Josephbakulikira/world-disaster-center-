import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import NotfoundPage from "./pages/notfound";
import SignIn from "./pages/signin";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/signup";
import AdminPage from "./pages/admin";
import ProfilePage from "./pages/profile";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/management/wdc/worddisastercenter/admin"
            element={<AdminPage />}
          />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="*" element={<NotfoundPage />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
