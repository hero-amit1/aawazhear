import React, { useEffect } from "react";
import "../styles/about.css";

// Brand Images
import brand1 from "../assets/brand/brand1.jpg";
import brand2 from "../assets/brand/brand2.jpg";
import brand3 from "../assets/brand/brand3.jpg";
import brand4 from "../assets/brand/brand4.jpg";
import brand5 from "../assets/brand/brand5.jpg";
import brand6 from "../assets/brand/brand6.jpg";

// Contact Image
import contactImg from "../assets/service/contact.jpg";

// About Section Images
import whoweareImg from "../assets/about/whoweare.jpg";
import doctorImg from "../assets/about/doctor.jpeg";
import hearingAidsImg from "../assets/about/HearingAids.webp";
import hearingAssessmentsImg from "../assets/about/HearingAssessments.webp";
import speechTherapyImg from "../assets/about/SpeechTherapy.jfif";

export default function About() {

  // SCROLL REVEAL ANIMATION
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".fade-in, .fade-up, .fade-down, .slide-left, .slide-right, .slide-up"
    );

    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="about-page">

      {/* HERO BANNER */}
      <section className="hero-banner fade-down">
        <div className="hero-text">
          <h1>Aawaz Hearing & Speech Care Center</h1>
          <p>Your trusted partner for hearing, speech & communication wellness.</p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section-row slide-left">
        <div className="image-box zoom-hover">
          <img
            src={whoweareImg}
            alt="Who We Are"
          />
        </div>

        <div className="text-box">
          <h2>Who We Are</h2>
          <p>
            We are a specialized hearing and speech diagnostic center committed
            to improving lives through advanced evaluation, therapy, and rehabilitation.
          </p>
          <p>
            Our mission is to deliver world-class care using modern technology
            and compassionate support for all ages.
          </p>
        </div>
      </section>

      {/* OUR SERVICES OVERVIEW */}
      <section className="wide-section fade-in">
        <h2>What We Provide</h2>
        <p className="center-text">
          A complete range of hearing and speech solutions—from diagnosis to rehabilitation.
        </p>

        <div className="service-grid">
          <div className="service-card fade-up">
            <img src={hearingAssessmentsImg} alt="Hearing Assessments" />
            <h4>Hearing Assessments</h4>
            <p>PTA, Tympanometry, OAE, ABR & more advanced tests.</p>
          </div>

          <div className="service-card fade-up">
            <img src={speechTherapyImg} alt="Speech Therapy" />
            <h4>Speech Therapy</h4>
            <p>For children & adults with speech, fluency & language disorders.</p>
          </div>

          <div className="service-card fade-up">
            <img src={hearingAidsImg} alt="Hearing Aids" />
            <h4>Hearing Aids</h4>
            <p>Digital, rechargeable & Bluetooth-enabled solutions.</p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section fade-in">
        <h2>Meet Our Specialist</h2>
        <p className="center-text">
          Our experienced doctor is dedicated to improving hearing and speech health for all patients.
        </p>

        <div className="team-cards">
          <div className="team-card slide-up">
            <img src={doctorImg} alt="Doctor" />
            <h4>Doctor</h4>
            <p>
              Our lead specialist provides comprehensive hearing and speech evaluations.
              With years of experience and compassionate care, the doctor ensures personalized
              treatment plans for every patient, helping them regain clarity in communication.
            </p>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="process-section fade-in">
        <h2>Our Care Journey</h2>

        <div className="process-steps">
          <div className="step slide-left">
            <span>01</span>
            <h4>Book Consultation</h4>
            <p>Schedule your appointment at your convenience.</p>
          </div>

          <div className="step slide-up">
            <span>02</span>
            <h4>Assessment & Diagnosis</h4>
            <p>Accurate tests using modern equipment.</p>
          </div>

          <div className="step slide-right">
            <span>03</span>
            <h4>Begin Treatment</h4>
            <p>Personalized therapy & rehabilitation plans.</p>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="brands-section fade-in">
        <h2>Trusted Hearing Aid Partners</h2>

        <div className="brand-logos slide-left">
          <img src={brand1} alt="Brand 1" />
          <img src={brand2} alt="Brand 2" />
          <img src={brand3} alt="Brand 3" />
          <img src={brand4} alt="Brand 4" />
          <img src={brand5} alt="Brand 5" />
          <img src={brand6} alt="Brand 6" />
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="contact-strip slide-up">
        <div className="contact-text">
          <h2>Need Assistance?</h2>
          <p className="phone">981-3573953</p>
          <p>Our experts are ready to guide you on hearing & speech solutions.</p>
        </div>

        <div className="contact-image zoom-hover">
          <img
            src={contactImg}
            alt="hearing aid"
          />
        </div>
      </section>

    </div>
  );
}
