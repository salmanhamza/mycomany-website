import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import News from "./components/News/News";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimony" element={<Testimonials />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* <Services />
          <Portfolio />
          <Testimonials />
          <News />
          
          */}
        </Routes>
        <Banner />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
