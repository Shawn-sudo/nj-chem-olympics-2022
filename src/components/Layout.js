import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";

//styles
const pageStyles = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
};

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#705df2" />
      </Helmet>
      <div style={pageStyles}>
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
