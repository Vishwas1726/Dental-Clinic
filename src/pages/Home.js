import React, { useState } from "react";
import Treatments from "../components/Treatments";
import TestimonialCard from "../components/TestimonialCard";
import StatsSection from "../components/StatsSection";
import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "../styles/Hero.css";
import "../styles/About.css";
import "../styles/Testimonials.css";
import "../styles/FAQ.css";
import "../styles/animations.css";

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Scroll animation refs
  const aboutAnim = useScrollAnimation(0.15);
  const testimonialsAnim = useScrollAnimation(0.1);
  const faqAnim = useScrollAnimation(0.1);

  const faqData = [
    {
      question: "What should I bring to my first dental appointment?",
      answer: "Please bring a government-issued photo ID, any active dental insurance cards, and details of your medical history or current medications. If you have recent dental X-rays, please bring them along or email them to coredentistry@gmail.com."
    },
    {
      question: "Do you accept dental insurance?",
      answer: "Yes, we work with a wide range of major dental insurance providers. Our reception staff can help you verify your benefits, submit claims, and clarify co-pays before your treatment."
    },
    {
      question: "How often should I get a dental cleaning and checkup?",
      answer: "For most patients, we recommend visiting every six months for a professional cleaning and thorough checkup to prevent decay and maintain gum health. Some patients with history of gum disease may need more frequent care."
    },
    {
      question: "What are clear aligners and are they right for me?",
      answer: "Clear aligners are virtually invisible, removable trays that gradually straighten teeth. They are a comfortable alternative to traditional metal braces. We can assess your smile during a consultation to see if you are a candidate."
    },
    {
      question: "Is root canal treatment painful?",
      answer: "No, root canal treatments are performed under local anesthesia, so you shouldn't feel any pain during the procedure. In fact, root canals are designed to relieve the pain caused by infected dental pulp."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Healthy Smiles Begin Here</h1>
          <p>
            We provide modern dental treatments with advanced technology
            and experienced professionals dedicated to your oral health.
          </p>
          <Link to="/book" className="hero-button">
            Book Appointment
          </Link>
        </div>
      </section>

      {/* About Section with scroll reveal */}
      <section
        className={`about-section reveal ${aboutAnim.isVisible ? "visible" : ""}`}
        ref={aboutAnim.ref}
      >
        <div className="about-container">
          <div className="about-image">
            <img src={require("../assets/about.jpeg")} alt="Dental Clinic" />
          </div>
          <div className="about-text">
            <h2>Why Choose Core Dentistry</h2>
            <p>
              At Core Dentistry we believe that every patient deserves
              comfortable, safe and high quality dental care. Our clinic is
              equipped with modern dental technology that helps us provide
              accurate diagnosis and effective treatments while ensuring
              maximum patient comfort.
            </p>
            <p>
              Our experienced dental professionals focus on personalized care
              and clear communication so patients feel confident about their
              treatment. From preventive checkups and cleaning to advanced
              dental procedures, we aim to provide reliable and long-term
              solutions for your oral health.
            </p>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <StatsSection />

      {/* Treatments Section */}
      <Treatments />

      {/* Testimonials with scroll reveal */}
      <section
        className={`testimonials reveal ${testimonialsAnim.isVisible ? "visible" : ""}`}
        ref={testimonialsAnim.ref}
      >
        <h2>Patient Testimonials</h2>
        <div className="testimonial-container">
          <TestimonialCard
            name="Rahul V"
            review="Very professional dentist and excellent treatment experience."
          />
          <TestimonialCard
            name="Priya"
            review="Friendly staff and painless dental procedures."
          />
          <TestimonialCard
            name="Ankit"
            review="Best dental clinic I have visited. Highly recommended."
          />
        </div>
      </section>

      {/* FAQ with scroll reveal */}
      <section
        className={`faq-section reveal ${faqAnim.isVisible ? "visible" : ""}`}
        ref={faqAnim.ref}
        aria-label="Frequently Asked Questions"
      >
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                className={`faq-item ${isOpen ? "active" : ""}`}
                key={index}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFAQ(index);
                    }
                  }}
                  role="button"
                  tabIndex="0"
                  aria-expanded={isOpen}
                >
                  <h3>{item.question}</h3>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
                <div className="faq-answer" role="region" aria-hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;