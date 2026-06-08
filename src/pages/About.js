import React from "react";
import doctor from "../assets/doctor.png";
import about from "../assets/about.jpeg";
import "../styles/global.css";
import "../styles/Doctor.css";
function About() {
  return (
    <div className="about-page">
      <section className="about-clinic">
        <div className="about-container">
          <div className="about-image">
            <img src={about} alt="Dental Clinic"/>
          </div>
          <div className="about-text">
            <h2>About Core Dentistry</h2>
            <p>
              Core Dentistry is committed to providing modern dental care
              with advanced technology and a patient centered approach. Our
              clinic offers a wide range of dental treatments including
              preventive care, orthodontics, root canal treatment and wisdom
              tooth removal.
            </p>
            <p>
              We focus on maintaining high standards of hygiene and use
              advanced equipment such as digital X-rays, intraoral cameras,
              ultrasonic scaling systems and rotary endodontic tools. These
              technologies help us deliver accurate diagnosis, efficient
              treatments and a comfortable experience for our patients.
            </p>
          </div>
        </div>
      </section>
      <section className="doctor-section">
  <div className="doctor-container">
    <div className="doctor-info">
      <h2>Meet Our Doctor</h2>
      <p>
        Our clinic is led by an experienced dental professional who
        believes in providing ethical and patient focused dental care.
        With a strong emphasis on preventive dentistry and modern
        treatment techniques, our doctor ensures every patient receives
        personalized attention and the most suitable treatment plan.
      </p>
      <p>
        By combining clinical expertise with advanced dental technology,
        our doctor aims to restore oral health while ensuring patient
        comfort and confidence throughout the treatment process.
      </p>
    </div>
    <div className="doctor-image">
      <img src={doctor} alt="Doctor"/>
    </div>
  </div>
</section>

    </div>
  );
}

export default About;