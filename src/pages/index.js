import React from "react";
import Layout from "../components/Layout";
import ChemOfLead from "../components/home_page/chem_of_lead";
import FlintWaterCrisis from "../components/home_page/flint_water_crisis";
import HealthHazardsForLeadExposure from "../components/home_page/health_hazards_for_lead_exposure";
import "../App.css";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// styles
const pageContentLayoutVerticalStyles = {
  minHeight: "100vh",
  // paddingTop: 96,
};

const pageContentLayoutHorizontalStyles = {
  maxWidth: 1200,
  margin: "auto",
  padding: 20,
};

const imgStyles = {
  height: 40,
  width: 40,
  margin: 5,
  borderRadius: 20,
  WebkitMaskImage: "-webkit-radial-gradient(white, black)",
};

// markup
const IndexPage = () => {
  return (
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
          todo: show the progress
        </div>
      </div>

      <main style={pageContentLayoutVerticalStyles}>
        {/* Content wrapper */}
        <title>Home Page</title>

        <div
          style={{
            position: "fixed",
            zIndex: -2,
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "var(--primary-darker)",
          }}
          className="transition-by-itself"
          // background
        />

        {/* <div
          style={{
            position: "fixed",
            zIndex: -1,
            height: 200,
            width: 200,
            backgroundColor: "orange",
            borderRadius: 100,
            top: 200,
            left: 210,
          }}
          // background shapes
        /> */}

        <div>
          <div
            style={{
              height: 96,
              backgroundColor: "white",
            }}
          />

          <div className="solid-row">
            <div style={pageContentLayoutHorizontalStyles}>
              <ChemOfLead />
            </div>
          </div>

          <div className="solid-row">
            <div style={pageContentLayoutHorizontalStyles}>
              <HealthHazardsForLeadExposure />
            </div>
          </div>

          <div className="transparent-row">
            <div style={pageContentLayoutHorizontalStyles}>
              <FlintWaterCrisis />
            </div>
          </div>
          
          <div className="solid-row">
            <div style={pageContentLayoutHorizontalStyles}>
              <div style={{ height: 200 }} />
              <h2>Contents</h2>
              <ul>
                <li>
                  The chemistry of lead (both physical and chemical properties)
                </li>

                <li>
                  Health hazards for lead exposure - for both infants/children
                  and adults and are the effects reversible?
                </li>

                <li>
                  The Flint water crisis - what caused it and how was the crisis
                  corrected? A clear understanding of the chemistry involved is
                  important
                </li>

                <li>What are safe levels of lead in drinking water?</li>
                <li>
                  Home testing kits for lead - what is the chemistry behind them
                  and how reliable are they?
                </li>

                <li>
                  Removal of lead from the body - naturally and by chelation
                  therapy
                </li>

                <li>
                  Your site will include an interactive map of the U. S. that
                  includes the following data for at least 5 states. Data will
                  include the number or percent of lead service lines state
                </li>
              </ul>
              <h2>Brain Storm</h2>
              {/* <TrainExport /> */}
              <h3>Flow</h3>
              <p>
                Put everything in one page → can easily check info by scrolling
                down (Imagine Apple website for introducing their products)
              </p>
              <ol>
                <li>Show how lead in water can be harmful</li>
                <li>
                  Map (make with threeJS ig) (threeJS is a cool tool, but it
                  requires too much work) → show "the number of percent of lead
                  service lines state" (required) and
                </li>
              </ol>
              {/* <ul style={listStyles}>
          {links.map((link) => (
            <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
              <span>
                <a
                  style={linkStyle}
                  href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                >
                  {link.text}
                </a>
                {link.badge && (
                  <span style={badgeStyle} aria-label="New Badge">
                    NEW!
                  </span>
                )}
                <p style={descriptionStyle}>{link.description}</p>
              </span>
            </li>
          ))}
        </ul> */}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
