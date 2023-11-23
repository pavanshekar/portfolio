import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Intro";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Progress from "./components/Progress/Progress";
import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "./components/Contact/Contact";
import EducationExperience from './components/EducationExperience/EducationExperience'; 

function App() {
  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <div id="preloader">
          <h2 className="name-load  animate-charcter">l O A D I N G</h2>
        </div>
        <div className="homepage">
          <Navbar />
          <Home />
        </div>
        <AboutMe />
        <EducationExperience />
        <Progress />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
