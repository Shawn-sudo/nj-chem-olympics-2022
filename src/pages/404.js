import * as React from "react";
import { Link } from "gatsby";
import "../App.css";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

// styles
const headingStyles = {
  color: "var(--primary)",
};

const pageContentLayoutStyles = {
  minHeight: "100vh",
  maxWidth: 1200,
  margin: "auto",
  paddingTop: 96 - 55,
};

const paragraphStyles = {
  marginBottom: 48,
};

const imgStyles = {
  height: 40,
  width: 40,
  margin: 5,
  borderRadius: 20,
  WebkitMaskImage: "-webkit-radial-gradient(white, black)",
};

// markup
const NotFoundPage = () => {
  return (
    <>
      <title>Page Not found</title>
      <Layout>
        <div
          style={{
            height: 55,
            width: "100vw",
            position: "fixed",
            top: 0,
            backgroundColor: "rgba(255, 255, 255, 0.72)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            zIndex: 10,
          }}
          className="transition-by-itself"
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              maxWidth: 1200,
              margin: "auto",
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
            {/* Would like to write this appBar in objective coding way or smth, 
          but I don't know if it also works well with JS/React, so just copied & pasted from 
          index.js for now */}
          {/* Like updating states for child: idk if that would also work here */}
          </div>
        </div>
        <main style={pageContentLayoutStyles}>
          <h1 style={headingStyles}>Page not found</h1>
          <h3>404</h3>
          <p style={paragraphStyles}>
            So sad . . . {/* we couldn’t find what you were looking for. */}
            <Link to="/">Go home</Link>
          </p>
        </main>
      </Layout>
    </>
  );
};

export default NotFoundPage;
