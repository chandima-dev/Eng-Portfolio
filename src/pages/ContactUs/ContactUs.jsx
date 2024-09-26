import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  StyledContainer,
  StyledFormSection,
  StyledImageSection,
  StyledFormWrapperWithBorder,
  StyledSocialSection,
  StyledFormHeader,
} from "./ContactUsStyles"; // Assuming StyledFormHeader is defined in the styles file
import contactImage from "../../../public/images/contactus.svg"; // Correct way to import an image

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "your_service_id",
      "your_template_id",
      form.current,
      "your_user_id"
    ).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <StyledContainer>
      <StyledFormWrapperWithBorder>
        <StyledFormSection>
          <StyledFormHeader>
            <h1>We're here to help</h1>
          </StyledFormHeader>
          <p>
            Need assistance or have any questions?
            </p>
            <p> Send us a message, and our
            team will get back to you as soon as possible!
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="user_name">Name</label>
            <input id="user_name" type="text" name="user_name" required />
            <label htmlFor="user_email">Email</label>
            <input id="user_email" type="email" name="user_email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </StyledFormSection>

        <StyledImageSection>
          <img src={contactImage} alt="Decorative Image" />
        </StyledImageSection>
      </StyledFormWrapperWithBorder>
    </StyledContainer>
  );
};

export default ContactUs;
