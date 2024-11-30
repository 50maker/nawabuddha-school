import "./index.css";
import Services from "./components/Services";
import { Carousel } from "./components/Carousel";

import { slides } from "./data/carouselData.json";

export default function App() {
  return (
    <div>
      <div className="container">
        <nav className="nav">
          <div className="nav-left">
            <img src="/images/logo.jpg" className="logo" />
            <div className="nav-contact">
              <p>+977 9841689234</p>
              <p>nawabuddha2022@gmail.com</p>
              <p>Chabahil, Kathmandu</p>
            </div>
          </div>

          <div className="nav-items">
            <span>
              <a href="#home">Home</a>
            </span>
            <span>
              <a href="#gallery">Gallery</a>
            </span>
            {/* <span>About Us</span> */}
          </div>
        </nav>

        <div className="hero-section" id="#home">
          <div className="hero-text">
            <p className="hero-title">Namabuddha Open School</p>
            <p className="hero-sub-text">
              Namabuddha Open School was established in 2007 AD and taught by
              experienced teachers and professionals.We provide high-quality
              education that will enable students to establish the foundation
              for a successful future.
            </p>
          </div>
          <img className="hero-img" src="/main-photo.jpg" />
        </div>

        <div className="services">
          <p className="services-title">Services</p>
          <div className="services-container">
            <Services
              src="/images/services/see.jpg"
              title="Private See and +2"
              subHeading="Our SEE and +2 passing tuition program is designed to ensure academic excellence and success for every student. With 100% pass results, our teaching methods focus on building strong foundational knowledge and regular assessments."
            />
            <Services
              src="/images/services/bridge.jpg"
              title="Bridge Course"
              subHeading="Our comprehensive bridge course is designed for SEE graduates to seamlessly transition into higher studies while excelling in entrance exams. This program focuses on strengthening core concepts essential for +2 and other academic streams."
            />
            <Services
              src="/images/services/nurse.jpg"
              title="Staff Nurse"
              subHeading="Our Staff Nurse Entrance Preparation Course helps aspiring nurses achieve their dream of entering top nursing programs.With  practical tips, and mock exams students gain the knowledge, skills, and confidence needed to excel. "
            />
            <Services
              src="/images/services/computer.jpg"
              title="Computer"
              subHeading="Our computer course is designed to equip learners with essential digital skills. Whether you're a beginner or looking to enhance your knowledge, this course offers comprehensive training."
            />
          </div>
        </div>

        <div className="gallery" id="gallery">
          <p className="gallery-title">Gallery</p>
          <Carousel data={slides} />
        </div>

        <div className="footer">
          <div>
            <img src="/images/logo.jpg" className="footer-logo" />
          </div>
          <div className="footer-right-title">
            <p>Opening Hours</p>
            <div className="footer-right-sub">
              <p>Sun-Fri</p>
              <p>7:00am-3:00pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
