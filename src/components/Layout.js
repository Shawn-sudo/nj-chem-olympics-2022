import React from "react";
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
      <div style={pageStyles}>
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
