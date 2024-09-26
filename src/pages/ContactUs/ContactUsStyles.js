import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 10px;
  margin-top: -100px;
  position: relative;  // Ensure the element can be stacked with z-index
  z-index: 10; // Adjust as needed to ensure it's above the slideshow

  @media (max-width: 768px) {
    height: auto; // Adjust height for mobile
    margin-top: -250px;
    padding: 10px;
    position: relative;  // Ensure the element can be stacked with z-index
    z-index: 10; // Adjust as needed to ensure it's above the slideshow
  }
`;


export const StyledFormWrapperWithBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  border: 3px solid transparent;
  padding: 40px; // Padding to make the rectangle larger than content
  transition: border-color 0.3s ease; // Smooth transition effect
  background-color: black;

  &:hover {
    border-color: #f9690e; // Change border to orange on hover
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse; // Stack form below the SVG on mobile
    padding: 20px; // Reduce padding for mobile
  }
`;

export const StyledFormSection = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 20px;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  input, textarea {
    width: 100%;
    margin: 10px 0;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #dddddd;
    &:focus {
      border-color: #00ce9e;
    }
  }

  button {
    width: 105%;
    padding: 10px;
    background-color: #f9690e;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px;
    border: 1px solid #dddddd;
  }

  label {
    align-self: flex-start;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    width: 90%; // Full width on mobile
    margin-right:20px;

    button {
    width: 106%;
    padding: 10px;
    background-color: #f9690e;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px;
    border: 1px solid #dddddd;
  }

  }
`;

export const StyledImageSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 100px;

  img {
    max-width: 100%;
    height: auto;
    background-color: black;
  }

  @media (max-width: 768px) {
    width: 100%; // Full width on mobile
    margin-left: 0; // Remove left margin
    margin-bottom: 1vh; // Add spacing between the image and the form
  }
`;

export const StyledSocialSection = styled.div`
  margin-top: 30px; // Space above the social section
  text-align: center;

  p {
    margin: ;
    color: #ffffff;
    font-size: 16px;
  }

  .social-icons {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  a {
    color: #f9690e;
    text-decoration: none;
    font-size: 18px;
    display: flex;
    align-items: center;

    i {
      margin-right: 8px;
    }

    &:hover {
      color: #ffffff; // Hover color for social icons
    }
  }
`;

// Adding the new StyledFormHeader
export const StyledFormHeader = styled.div`
  margin-bottom: 20px;
  h1 {
    font-size: 2.5rem;
    color: #f9690e;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem; // Slightly smaller font for mobile
      
    }
  }
`;
