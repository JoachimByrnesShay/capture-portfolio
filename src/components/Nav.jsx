import styled from "styled-components";
import {
  Link,
  NavLink,
} from "react-router-dom";
const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <NavLink
          id="logo"
          to="/"
        >
          Capture
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/">
            1. About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/ourwork">
            2. Our Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            3. Contact Us
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 7rem;
    position: relative;
  }
  a {
    color: white;
    text-decoration: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
`;

export default Nav;
