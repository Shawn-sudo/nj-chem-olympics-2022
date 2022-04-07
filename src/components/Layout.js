import React from "react";
import Footer from "./Footer";

//styles
const pageStyles = {
  color: "#232129",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
};

const Layout = ({ children }) => {
  return (
    <div style={pageStyles}>
      <div
        style={{
          backgroundColor: "rgba(248, 248, 255, 0.4)",
          height: 55,
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "space-between",
          backdropFilter: "blur(20px)",
          zIndex: 10,
        }}
      >
        Appbar here
      </div>
      <div style={{ minHeight: "100vh" }}>
        <div
          style={{
            paddingTop: "96px",
            maxWidth: 1000,
            margin: "auto",
          }}
        >
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
