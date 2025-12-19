import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  // ------------------- SCROLL ANIMATIONS -------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".fade-in, .slide-left, .slide-right")
      .forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="home">
      {/* =================== HERO SECTION (STATIC) =================== */}
      <section className="hero-static">
        <div className="hero-content">
          <div className="hero-left fade-in">
            <span className="hero-tag">WELCOME TO AAWAZ</span>
            <h1>The best hearing aid in Nepal</h1>
            <p>
              You’ve come to the right place. Aawaz Speech & Hearing Center
              offers advanced hearing solutions to help you hear and live
              better.
            </p>

            <div className="hero-actions">
              <NavLink to="/products">
                <button className="btn-primary"> View Product</button>
              </NavLink>
              <NavLink to="/appointment">
                <button className="btn-outline">Book Appointment</button>
              </NavLink>
            </div>
          </div>

          <div className="hero-right slide-right">
            <img
              src="/mnt/data/h.PNG"
              alt="Hearing Aid User"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* =================== WELCOME =================== */}
      <section className="section section-light fade-in">
        <h2>Welcome to Aawaz Hearing & Speech Care Center</h2>
        <p>
          Your hearing and speech health is our top priority. Explore our
          services to learn how we can help you or your loved ones improve
          communication, address hearing concerns, and enhance overall auditory
          wellness. Our team of experts provides personalized care, guidance,
          and support for every stage of life.
        </p>
        <p>
          From hearing assessments to speech therapy, tinnitus management, and
          hearing aid fittings, we are here to ensure you receive the best
          possible care with compassion and expertise.
        </p>
      </section>

      {/* =================== SERVICES =================== */}
      <section className="section section-white">
        <h2 className="slide-left">Our Key Services</h2>

        <div className="service-grid fade-in">
          <div className="service-card">
            <img
              src="https://images.pexels.com/photos/7578800/pexels-photo-7578800.jpeg"
              alt="Hearing Test"
            />
            <h3>Hearing Test</h3>
            <p>Complete diagnostic hearing evaluation.</p>
          </div>

          <div className="service-card">
            <img
              src="https://images.pexels.com/photos/4101140/pexels-photo-4101140.jpeg"
              alt="Speech Therapy"
            />
            <h3>Speech Therapy</h3>
            <p>Specialized speech & language services for all ages.</p>
          </div>

          <div className="service-card">
            <img
              src="https://images.pexels.com/photos/8376231/pexels-photo-8376231.jpeg"
              alt="Digital Hearing Aids"
            />
            <h3>Digital Hearing Aids</h3>
            <p>Top brands with latest digital features.</p>
          </div>
        </div>
      </section>

      {/* =================== BRANDS =================== */}
      <section className="section section-grey">
        <h2 className="slide-right">Top Hearing Aid Brands</h2>

        <div className="brand-logos fade-in">
          <img
            src="https://via.placeholder.com/120x50?text=Brand+1"
            alt="Brand 1"
          />
          <img
            src="https://via.placeholder.com/120x50?text=Brand+2"
            alt="Brand 2"
          />
          <img
            src="https://via.placeholder.com/120x50?text=Brand+3"
            alt="Brand 3"
          />
          <img
            src="https://via.placeholder.com/120x50?text=Brand+4"
            alt="Brand 4"
          />
        </div>
      </section>

      {/* =================== TESTIMONIALS =================== */}
      <section className="section section-cream">
        <h2 className="fade-in">What Our Patients Say</h2>

        <div className="testimonial-grid">
          <div className="testimonial-card slide-left">
            <p>“Amazing service! My father can hear clearly again.”</p>
            <h4>— Patient A</h4>
          </div>

          <div className="testimonial-card slide-right">
            <p>“Professional staff and excellent care.”</p>
            <h4>— Patient B</h4>
          </div>
        </div>
      </section>

      {/* =================== CONTACT CTA =================== */}
      <section className="section section-light fade-in">
        <h2>Need Help With Hearing?</h2>
        <p>Contact us for evaluations, treatment and expert advice.</p>

        <div className="cta-actions">
          <NavLink to="/contact">
            <button className="btn-primary">Contact Us</button>
          </NavLink>
          <NavLink to="/appointment">
            <button className="btn-outline">Book Appointment</button>
          </NavLink>
        </div>
      </section>
    </div>
  );
}
