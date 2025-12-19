// src/pages/Contact.js
import "../styles/contact.css";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaUser,
  FaFacebook,
  FaInstagram,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    human: false,
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    let err = {};

    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email.trim()) err.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) err.email = "Invalid email";
    if (!form.phone.trim()) err.phone = "Phone is required";
    if (!/^[0-9]{7,10}$/.test(form.phone)) err.phone = "Invalid phone number";
    if (!form.subject.trim()) err.subject = "Subject is required";
    if (!form.message.trim()) err.message = "Message cannot be empty";
    if (!form.human) err.human = "Please confirm you are human";

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validate();
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      setSuccessMsg(
        "Your message has been sent successfully! We will contact you soon."
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        human: false,
      });
    }
  };

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-inner animate-up">
          <p className="contact-hero-subtitle">
            Providing Better Hearing & Speech Care
          </p>
          <h1>
            Qualified & Experienced <br />
            Audiologist & Speech Pathologist
          </h1>
          <p className="contact-breadcrumb">
            AawAZ Hearing & Speech Care Center &gt; <span>Contact Us</span>
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="contact-main">
        <div className="contact-inner">
          {/* FORM */}
          <div className="contact-form-card animate-left">
            <h3>Send Us a Message</h3>

            {successMsg && <p className="contact-success">{successMsg}</p>}

            <form onSubmit={handleSubmit}>
              <div className="contact-row">
                <div className="input-box">
                  <FaUser />
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                </div>
                {errors.name && <p className="error-text">{errors.name}</p>}

                <div className="input-box">
                  <FaEnvelope />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                  />
                </div>
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>

              <div className="contact-row">
                <div className="input-box">
                  <FaPhoneAlt />
                  <input
                    name="phone"
                    type="text"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                </div>
                {errors.phone && <p className="error-text">{errors.phone}</p>}

                <div className="input-box">
                  <FaUser />
                  <input
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                  />
                </div>
                {errors.subject && (
                  <p className="error-text">{errors.subject}</p>
                )}
              </div>

              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
              />
              {errors.message && <p className="error-text">{errors.message}</p>}

              <label className="human-label">
                <input
                  name="human"
                  type="checkbox"
                  checked={form.human}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>I confirm I am human
              </label>
              {errors.human && <p className="error-text">{errors.human}</p>}

              <button type="submit" className="contact-submit">
                Submit Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="contact-info-card animate-right">
            <h3>Contact Information</h3>
            <hr />

            <div className="contact-info-item">
              <FaMapMarkerAlt />
              <p>
                Room 105, Butwal Complex <br />
                Butwal, Nepal
              </p>
            </div>

            <div className="contact-info-item">
              <FaPhoneAlt />
              <p>+977 981-3379393</p>
            </div>

            <div className="contact-info-item">
              <FaPhoneAlt />
              <p>+977 071-000000</p>
            </div>

            <div className="contact-info-item">
              <FaEnvelope />
              <p>aawazhearing@gmail.com</p>
            </div>

            {/* Opening Hours */}
            <div className="contact-hours">
              <FaClock /> <h4>Opening Hours</h4>
              <p>Sun - Fri: 9 AM - 6 PM</p>
              <p>Saturday: Closed</p>
            </div>

            {/* Social Media */}
            <div className="contact-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/9779813379393"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-faq animate-up">
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>Do I need an appointment?</summary>
          <p>Yes, booking in advance ensures better service.</p>
        </details>

        <details>
          <summary>Do you provide home visit services?</summary>
          <p>Yes, home visit is available upon request.</p>
        </details>
      </section>

      {/* MAP */}
      <section className="contact-map animate-up">
        <iframe
          title="AawAZ Hearing & Speech Care Center"
          src="https://www.google.com/maps/dir/27.705344,84.4131412/Aawaz+Hearing+and+Speech+care+Center,+Hospital+Rd+10,+Bharatpur+44200/@27.6939849,84.3893104,13z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3994fbc4ab160d6f:0x3fa4c00f10d335cb!2m2!1d84.4320284!2d27.6810354?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
