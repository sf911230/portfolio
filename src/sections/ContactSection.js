import React from "react";
import ContactForm from "../components/ContactForm";
import linkedInLogo from "../assets/images/linkedInLogo.png";
import phoneIcon from "../assets/images/phoneIcon.png";
import Section from "../components/Section";

const ContactSection = ({ sectionRefs }) => {
  return (
    <Section
      index={5}
      sectionRefs={sectionRefs}
      sectionClass="contact-section"
      isBackgroundLight={true}
    >
      <h1 className="section-headline">Contact me</h1>
      <div className="contact-section-logos">
        <a
          href="https://www.linkedin.com/in/stefani-fiykova-dimitrova-093048141"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <img
            className="contact-icon Li-icon"
            src={linkedInLogo}
            alt="LinkedIn Profile"
          />
        </a>

        <a href="tel:+359888258942" aria-label="Call me">
          <img
            className="contact-icon phone-icon"
            src={phoneIcon}
            alt="Call me"
          />
        </a>
      </div>
      <h3>Let's work together!</h3>
      <div className="contact-form-wrapper">
        <ContactForm />
      </div>
    </Section>
  );
};

export default ContactSection;
