import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required!";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is not valid!";
    }
    if (!formData.message) {
      errors.message = "Message is required!";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Send email via EmailJS
    emailjs
      .send(
        "service_k21w8uc",
        "template_c3bmeq4",
        formData,
        "JSzaAs-uePW9OpLkt"
      )
      .then(
        (response) => {
          setSuccessMessage("Your message has been sent successfully!");
          setErrorMessage("");
          setIsLoading(false);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          setErrorMessage("Failed to send the message. Please try again.");
          setSuccessMessage("");
          setIsLoading(false);
        }
      );
  };

  const reloadForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setSuccessMessage("");
    setErrorMessage("");
    setFormErrors({});
  };

  return (
    <div>
      {successMessage ? (
        <div className="contact-form-success-message">
          <h3>{successMessage}</h3>
          <button className="contact-form-reload-button" onClick={reloadForm}>
            Send New Message
          </button>
        </div>
      ) : errorMessage ? (
        <div className="contact-form-error-message">
          <h3>{errorMessage}</h3>
          <button className="contact-form-reload-button" onClick={reloadForm}>
            Send New Message
          </button>
        </div>
      ) : (
        <>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-field-group">
              <label className="contact-form-label" htmlFor="name">
                Name:
              </label>
              <input
                className="contact-form-field"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
              {formErrors.name && (
                <span className="contact-form-field-error">
                  {formErrors.name}
                </span>
              )}
            </div>
            <div className="contact-form-field-group">
              <label className="contact-form-label" htmlFor="email">
                Email:
              </label>
              <input
                className="contact-form-field"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
              />
              {formErrors.email && (
                <span className="contact-form-field-error">
                  {formErrors.email}
                </span>
              )}
            </div>
            <div className="contact-form-field-group">
              <label className="contact-form-label" htmlFor="message">
                Message:
              </label>
              <textarea
                className="contact-form-textarea"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
              ></textarea>
              {formErrors.message && (
                <span className="contact-form-field-error">
                  {formErrors.message}
                </span>
              )}
            </div>
            <div className="contact-form-field-group">
              <button
                className="contact-form-submit-btn"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default ContactForm;
