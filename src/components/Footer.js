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
      {/* <p>&copy; 2022. Seihyun Lee, Andy Zhao, Ethan Zhao</p> */}
      {/* I'm not sure if it is ok to mark copyright even though we don't "own" the copyright for any of those images */}
      <p style={endingCreditStyles}>
        Develop & Design & Research: Seihyun Lee, Ethan Zhao, Andy Zhao
      </p>
    </footer>
  );
};

export default Footer;
