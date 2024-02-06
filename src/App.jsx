// import './App.css'
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomeLayout from './HomeLayout'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchpage from "./pages/Home/SearchPage/Searchpage";
import Footer from "./HomeLayout/Footer";
import BannerSection from "./pages/Home/BannerPage/BannerSection";
import InfoPage from "./pages/Home/Info/InfoPage";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<BannerSection />} />
          <Route exact path="/info" element={<InfoPage />} />
          <Route exact path="/search" element={<Searchpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </Box>
  );
}

export default App;
