import React from "react";
import Layout from "../components/Layout";
import ChemOfLead from "../components/home_page/chem_of_lead";
import FlintWaterCrisis from "../components/home_page/flint_water_crisis";
import HealthHazardsForLeadExposure from "../components/home_page/health_hazards_for_lead_exposure";
import "../App.css";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import SafeLevelsOfLeadInDrinkingWater from "../components/home_page/safe_levels_of_lead_in_drinking_water";
import HomeTestingKitsForLead from "../components/home_page/home_testing_kits_for_lead";
import RemovalOfLeadFromTheBody from "../components/home_page/removal_of_lead_from_the_body";
import Bibliography from "../components/bibliography";

// styles
const pageContentLayoutVerticalStyles = {
  minHeight: "100vh",
  // paddingTop: 96,
};

const pageContentLayoutHorizontalStyles = {
  maxWidth: 1400,
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

        {/* <div
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
        /> */}

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

          <div
            // className="transparent-row"
            className="solid-row"
          >
            <div style={pageContentLayoutHorizontalStyles}>
              <FlintWaterCrisis />
            </div>
          </div>

          <div className="solid-row">
            <div style={pageContentLayoutHorizontalStyles}>
              <SafeLevelsOfLeadInDrinkingWater />
            </div>
          </div>

          <div className="solid-row">
            <div style={pageContentLayoutHorizontalStyles}>
              <HomeTestingKitsForLead />
            </div>
          </div>

          <div className="solid-row">
            <div style={pageContentLayoutHorizontalStyles}>
              <HealthHazardsForLeadExposure />
            </div>
          </div>

          <div className="solid-row">
            <div style={pageContentLayoutHorizontalStyles}>
              <RemovalOfLeadFromTheBody />
            </div>
          </div>

          <div style={{ height: 200 }} />

          <div className="solid-row">
            <div style={pageContentLayoutHorizontalStyles}>
              <Bibliography />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
