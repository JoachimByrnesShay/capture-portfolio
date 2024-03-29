import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import {
  StyledAbout,
  Description,
  StyledImage,
  Hide,
} from "../styles";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import {
  fade,
  fade2,
} from "../animation";
import { useScroll } from "./UseScroll";

const ServicesSection = () => {
  const [element, controls] =
    useScroll();
  return (
    <Services
      animate={controls}
      initial="hidden"
      variants={fade2}
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span>{" "}
          services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img
                src={clock}
                alt="icon"
              />
              <h3>Efficient</h3>
            </div>
            <p>
              Lorem, Maxime velit
              tenetur fugiat saepe qui.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img
                src={teamwork}
                alt="icon"
              />
              <h3>Teamwork</h3>
            </div>
            <p>
              Lorem, Maxime velit
              tenetur fugiat saepe qui.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img
                src={diaphragm}
                alt="icon"
              />
              <h3>Hot Cameras</h3>
            </div>
            <p>
              Lorem, Maxime velit
              tenetur fugiat saepe qui.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img
                src={money}
                alt="icon"
              />
              <h3>Affordable</h3>
            </div>
            <p>
              Lorem, Maxime velit
              tenetur fugiat saepe qui.
            </p>
          </Card>
        </Cards>
      </Description>
      <StyledImage>
        <img
          src={home2}
          alt="camera"
        />
      </StyledImage>
    </Services>
  );
};

const Services = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;
export default ServicesSection;
