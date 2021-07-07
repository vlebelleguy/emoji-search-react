// PACKAGES IMPORT //
import React from "react";
import styled from "styled-components";

// ASSETS IMPORT //
import { FaCode, FaHeart } from "react-icons/fa";

const FooterStyles = styled.div`
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0;
  }

  p {
    color: white;
    font-size: 20px;
    font-weight: normal;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    vertical-align: center;
  }

  .code-icon {
    color: white;
    vertical-align: middle;
  }

  .heart-icon {
    color: red;
    vertical-align: middle;
    animation: heart-beat 5s ease infinite;
  }

  @keyframes heart-beat {
    0% {
      transform: scale(1);
    }
    5% {
      transform: scale(1.25);
    }
    20% {
      transform: scale(1);
    }
    30% {
      transform: scale(1);
    }
    35% {
      transform: scale(1.25);
    }
    50% {
      transform: scale(1);
    }
    55% {
      transform: scale(1.25);
    }
    70% {
      transform: scale(1);
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer">
        <p>
          <FaCode className="code-icon" /> with{" "}
          <FaHeart className="heart-icon" /> by
          <a href="https://github.com/vlebelleguy" target="blank">
            {" "}
            Valentin Le Belleguy
          </a>
        </p>
      </div>
    </FooterStyles>
  );
};

export default Footer;
