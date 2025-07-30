// ContactUs.jsx
import React, { useState } from "react";
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    time: "",
    date: "",
  });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:4000/api/v1/profile", formData);
    setMessage(response.data.message);  // message from backend JSON
    setError(null);

    // Clear form after success
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      time: "",
      date: "",
    });
  } catch (err) {
    // Use .message (not .error) as per your backend error response
    setError(err.response?.data?.message || "An error occurred");
    setMessage(null);
  }
};


  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
          minLength={3}
          maxLength={30}
        />

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
          minLength={3}
          maxLength={30}
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone (10 digits)"
          required
          pattern="\d{10}"
          maxLength={10}
          minLength={10}
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          placeholder="Preferred Contact Time"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          placeholder="Preferred date"
        />

        <button type="submit">Send Inquiry</button>
      </form>
      
      {message && <p className="success-msg">{message}</p>}
      {error && <p className="error-msg">{error}</p>}
    </section>
  );
}

export default ContactUs;
