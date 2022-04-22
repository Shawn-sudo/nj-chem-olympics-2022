import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

//styles
const imgStyles = {
  height: 75,
  width: 75,
  padding: 7.5,
  margin: 7.5,
  borderRadius: 30,
  WebkitMaskImage: "-webkit-radial-gradient(white, black)",
};

const endingCreditStyles = { fontWeight: "bold" };

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
        <StaticImage
          src="../images/profiles/shawn.jpg"
          alt="Shawn's Face"
          className="little-shadow"
          style={imgStyles}
        />

        <StaticImage
          src="../images/profiles/andy.jpg"
          alt="Andy's Face"
          className="little-shadow"
          style={imgStyles}
        />

        <StaticImage
          src="../images/profiles/ethan.jpg"
          alt="Ethan's Face"
          className="little-shadow"
          style={imgStyles}
        />
      </Link>
      <p>&copy; 2022. Seihyun Lee, Andy Zhao, Ethan Zhao</p>

      <p style={endingCreditStyles}>
        Todo: put roles here (develop: --, data research (from the Internet ig):
        --)
      </p>

      <p style={endingCreditStyles}>Develop: Seihyun Lee, </p>
      <p style={endingCreditStyles}>Design: Seihyun Lee, </p>
      <p style={endingCreditStyles}>Research: </p>
    </footer>
  );
};

export default Footer;
