import * as React from "react";
import { Link } from "gatsby";
import "../App.css";
import Layout from "../components/Layout";

// styles
const headingStyles = {
  color: "var(--purple)",
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

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <title>Page Not found</title>
      <main style={pageContentLayoutStyles}>
        <h1 style={headingStyles}>Page not found</h1>
        <h3>404</h3>
        <p style={paragraphStyles}>
          So sad . . . {/* we couldn’t find what you were looking for. */}
          <Link to="/">Go home</Link>
        </p>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
