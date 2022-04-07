import React from "react";
import { Link } from "gatsby";

//styles
const imgStyles = {
  height: 75,
  width: 75,
  objectFit: "cover",
  padding: 7.5,
  borderRadius: 30,
};

const Footer = () => {
  return (
    <footer
      className="App-footer"
      style={{
        textAlign: "center",
        backgroundColor: "ghostwhite",
        padding: 20,
      }}
    >
      <Link to="/">
        <img
          src="/assets/profile/profile.jpg"
          alt="my face"
          className="little-shadow"
          style={imgStyles}
        />
        <img
          src="/assets/profile/profile.jpg"
          alt="Andy's Face"
          className="little-shadow"
          style={imgStyles}
        />
        <img
          src="/assets/profile/profile.jpg"
          alt="Ethan's face"
          className="little-shadow"
          style={imgStyles}
        />
      </Link>
      <p>&copy; 2022. Seihyun Lee, Andy Zhao, Ethan Zhao</p>
      {/* <p style={{ fontWeight: "bold" }}>Made by Seihyun (Shawn) Lee</p> */}
      {/* <p
        style={{
          opacity: 0.5,
        }}
      >
        Used&nbsp;
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          React
        </a>
        ,&nbsp;
        <a
          href="https://firebase.google.com/products/hosting"
          target="_blank"
          rel="noopener noreferrer"
        >
          Firebase Hosting
        </a>
        , and&nbsp;
        <a
          href="https://fontawesome.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Font Awesome
        </a>
      </p> */}
    </footer>
  );
};

export default Footer;
