import React, { useEffect, useRef } from "react";
import "../styles/services.css";

export default function Services() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.3 }
    );

    sectionsRef.current.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const attachRef = (el, index) => {
    sectionsRef.current[index] = el;
  };

  return (
    <div className="services-page">

      {/* HEADER BANNER */}
      <div className="services-banner fade-down">
        <h1>Our Services</h1>
      </div>

      {/* INTRO */}
      <div className="services-intro fade-up">
        <p>
          At Aawaz Hearing & Speech Care Center, we provide comprehensive diagnostic,
          therapeutic, and rehabilitative services using advanced technology and
          personalized care for all age groups.
        </p>
      </div>

      {/* SERVICES LIST */}
      <div className="services-list">

        {/* SERVICE 1 */}
        <div className="service-item slide-right hidden" ref={(el) => attachRef(el, 0)}>
          <img
            src="https://images.pexels.com/photos/8460121/pexels-photo-8460121.jpeg"
            alt="PTA Hearing Test"
          />
          <div className="service-content">
            <h2>PTA Test (Diagnostic Audiometer)</h2>
            <p>
              Pure Tone Audiometry (PTA) is a key diagnostic test used to assess hearing
              sensitivity by identifying the softest sounds you can hear at different pitches.
              Our experienced audiologists use advanced diagnostic audiometers to ensure
              accurate results and personalized treatment planning.
            </p>
          </div>
        </div>

        {/* SERVICE 2 */}
        <div className="service-item reverse slide-left hidden" ref={(el) => attachRef(el, 1)}>
          <div className="service-content">
            <h2>Tympanometry & Stapedius Reflex Test</h2>
            <p>
              These tests evaluate middle ear function. Tympanometry measures eardrum movement
              in response to air pressure changes, while the Stapedius Reflex Test checks middle
              ear muscle reflexes. They are quick, non-invasive, and suitable for all age groups.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/8376235/pexels-photo-8376235.jpeg"
            alt="Tympanometry Test"
          />
        </div>

        {/* SERVICE 3 */}
        <div className="service-item slide-right hidden" ref={(el) => attachRef(el, 2)}>
          <img
            src="https://images.pexels.com/photos/5327927/pexels-photo-5327927.jpeg"
            alt="Hearing Evaluation"
          />
          <div className="service-content">
            <h2>Comprehensive Hearing Tests</h2>
            <p>
              We offer a wide range of hearing tests to accurately assess your auditory health.
              Whether you experience mild hearing difficulty or significant hearing loss,
              our assessments help identify your unique needs and guide effective solutions.
            </p>
          </div>
        </div>

        {/* SERVICE 4 */}
        <div className="service-item reverse slide-left hidden" ref={(el) => attachRef(el, 3)}>
          <div className="service-content">
            <h2>Speech & Language Therapy</h2>
            <p>
              Our licensed speech-language pathologists provide personalized therapy for
              articulation, fluency, voice, and language development. Sessions are engaging
              and supportive for both children and adults.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg"
            alt="Speech Therapy"
          />
        </div>

        {/* SERVICE 5 */}
        <div className="service-item slide-right hidden" ref={(el) => attachRef(el, 4)}>
          <img
            src="https://images.pexels.com/photos/4100649/pexels-photo-4100649.jpeg"
            alt="Tinnitus Therapy"
          />
          <div className="service-content">
            <h2>Tinnitus Retraining Therapy (TRT)</h2>
            <p>
              TRT is an evidence-based approach that retrains the brain to perceive tinnitus
              sounds as neutral. Our program combines sound therapy and counseling to reduce
              the impact of tinnitus on daily life.
            </p>
          </div>
        </div>

        {/* SERVICE 6 */}
        <div className="service-item reverse slide-left hidden" ref={(el) => attachRef(el, 5)}>
          <div className="service-content">
            <h2>Hearing Aid Trials & Fittings</h2>
            <p>
              We provide comprehensive hearing aid trials and fittings, allowing patients
              to test devices in real-world environments. Our audiologists ensure optimal
              comfort, clarity, and ongoing support.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/8376235/pexels-photo-8376235.jpeg"
            alt="Hearing Aid Trial"
          />
        </div>

        {/* SERVICE 7 */}
        <div className="service-item slide-right hidden" ref={(el) => attachRef(el, 6)}>
          <img
            src="https://images.pexels.com/photos/8460121/pexels-photo-8460121.jpeg"
            alt="OAE Test"
          />
          <div className="service-content">
            <h2>Otoacoustic Emissions (OAE)</h2>
            <p>
              OAE testing evaluates inner ear (cochlear) function and is especially useful
              for newborns and young children. This non-invasive test delivers fast and
              accurate hearing assessment results.
            </p>
          </div>
        </div>

        {/* SERVICE 8 */}
        <div className="service-item reverse slide-left hidden" ref={(el) => attachRef(el, 7)}>
          <div className="service-content">
            <h2>Auditory Brainstem Response (ABR)</h2>
            <p>
              ABR testing measures the brain’s response to sound and helps diagnose hearing
              and neurological conditions. It is ideal for individuals unable to undergo
              standard hearing tests.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg"
            alt="ABR Test"
          />
        </div>

      </div>

      {/* HELP SECTION */}
      <div className="help-section fade-up">
        <div className="help-text">
          <h3>Need Assistance?</h3>
          <h2>Call Us Anytime</h2>
          <p>📞 981-3375935</p>
          <button>Contact Us</button>
        </div>

        <img
          className="help-img"
          src="https://images.pexels.com/photos/7089500/pexels-photo-7089500.jpeg"
          alt="Help Support"
        />
      </div>

    </div>
  );
}
