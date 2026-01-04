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
  FaGoogle,
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

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validate();
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      const emailBody = `
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Message:
${form.message}
      `;

      window.location.href = `mailto:aawazclinic42@gmail.com?subject=${encodeURIComponent(
        form.subject
      )}&body=${encodeURIComponent(emailBody)}`;

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
              {errors.message && (
                <p className="error-text">{errors.message}</p>
              )}

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
              <p>Bharatpur-10, Hospital Road Chitwan</p>
            </div>

            <div className="contact-info-item">
              <FaPhoneAlt />
              <p>+977 9845192771</p>
            </div>

            <div className="contact-info-item">
              <FaEnvelope />
              <p>aawazclinic42@gmail.com</p>
            </div>

            {/* Opening Hours */}
            <div className="contact-hours">
              <FaClock /> <h4>Opening Hours</h4>
              <p>Sun - Fri: 8 AM - 7 PM</p>
              <p>Saturday: Closed</p>
            </div>

            {/* Social Media */}
            <div className="contact-social">
              <a
                href="https://facebook.com/aawazhearing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.google.com/maps/dir/27.705344,84.4131412/aawaz+speech+and+hearing+clinic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogle />
              </a>

              <a
                href="https://wa.me/97798451927713"
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
      <section
        className="contact-map animate-up"
        style={{ width: "100%", height: "400px" }}
      >
        <iframe
          title="Aawaz Hearing & Speech Care Center"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.123456789!2d84.4320284!3d27.6810354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fbc4ab160d6f%3A0x3fa4c00f10d335cb!2sAawaz%20Hearing%20and%20Speech%20Care%20Center!5e0!3m2!1sen!2snp!4v1699999999999"
        ></iframe>
      </section>
    </div>
  );
}
