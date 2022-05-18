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
import Bibliography from "../components/home_page/bibliography";

// styles
const pageContentLayoutVerticalStyles = {
  minHeight: "100vh",
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
            minWidth: 550,
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
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

          <h2>Chemistry and Presence of Lead</h2>
        </div>
      </div>

      <main style={pageContentLayoutVerticalStyles}>
        {/* Content wrapper */}
        <title>Chemistry and Presence of Lead</title>
        <div>
          <div
            style={{
              height: 96,
            }}
          />

          <div style={pageContentLayoutHorizontalStyles}>
            <ChemOfLead />
          </div>

          <div style={pageContentLayoutHorizontalStyles}>
            <FlintWaterCrisis />
          </div>

          <div style={pageContentLayoutHorizontalStyles}>
            <SafeLevelsOfLeadInDrinkingWater />
          </div>

          <div style={pageContentLayoutHorizontalStyles}>
            <HomeTestingKitsForLead />
          </div>

          <div style={pageContentLayoutHorizontalStyles}>
            <HealthHazardsForLeadExposure />
          </div>

          <div style={pageContentLayoutHorizontalStyles}>
            <RemovalOfLeadFromTheBody />
          </div>

          <div style={pageContentLayoutHorizontalStyles}>
            <div className="background-card">
              <h2>Number of Lead Service Lines in each state</h2>
              <p>Tap on each pinpoint for the number of lead lines</p>
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1OgoC7S-L9xL9Y9bEBTQtgwNKbCtsnebI&ehbc=2E312F"
                style={{
                  width: "100%",
                  borderRadius: 20,
                  border: "none",
                }}
                height="600"
                title="interactive_map"
              ></iframe>
            </div>
          </div>

          <div style={{ height: 200 }} />

          <div style={pageContentLayoutHorizontalStyles}>
            <Bibliography />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
