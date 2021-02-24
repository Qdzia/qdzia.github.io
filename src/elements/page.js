import "bootstrap/dist/css/bootstrap.min.css";
import "../style/elements.css";
import Home from "./home";
import About from "./about";
import Experience from "./experience";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";



const page = () => {
  return (
    <div>
      <nav
        id="navbar-example"
        class="nav main-nav d-flex fixed-top justify-content-center bg-dark"
      >
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#home">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#resume">
              Resume
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <div id="home" />
        <Home />
        <div id="about" />
        <About />
        <div id="resume" />
        <Experience />
        <Skills />
        <div id="projects" />
        <Projects />
        <div id="contact" />
        <Contact />
        <Footer/>
      </div>
    </div>
  );
};

export default page;
