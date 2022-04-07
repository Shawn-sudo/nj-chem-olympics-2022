import * as React from "react";
import { Link } from "gatsby";
import "../App.css";
import Layout from "../components/Layout";

// styles
const headingStyles = {
  color: "var(--green)",
};

const paragraphStyles = {
  marginBottom: 48,
};

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <title>Page Not found</title>
      <main>
        <h1 style={headingStyles}>Page not found</h1>
        <h3>404</h3>
        <p style={paragraphStyles}>
          So sad . . . {/* we couldn’t find what you were looking for. */}
          {/* <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br /> */}
          <Link to="/">Go home</Link>
        </p>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
