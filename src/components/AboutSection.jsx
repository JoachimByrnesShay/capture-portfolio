import home1 from "../img/home1.png";
import styled from "styled-components";
import {
  StyledAbout,
  Description,
  StyledImage,
  Hide,
} from "../styles.js";

const AboutSection = () => {
  return (
    <StyledAbout>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make </h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>{" "}
              come
            </h2>
          </Hide>
          <Hide>
            <h2>true. </h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography
          or videography needs that you
          have. We are YOUR skilled
          professionals.
        </p>
        <button>Contact Us</button>
      </Description>
      <StyledImage>
        <img
          src={home1}
          alt="guy wth a camera"
        />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
