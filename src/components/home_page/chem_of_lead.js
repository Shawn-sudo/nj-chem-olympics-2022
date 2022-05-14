import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const imgStyles = {
  margin: 5,
  borderRadius: 20,
  WebkitMaskImage: "-webkit-radial-gradient(white, black)",
  height: "fit-content",
};

const rowStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "wrap",
};

const ChemOfLead = () => {
  return (
    <div className="background-card">
      <div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            height: 200,
          }}
        >
          <p>(later) A 3D lead model here</p>
        </div>
        <h2>Chemistry of Lead</h2>
        <h3>Physical Properties</h3>
        <div style={rowStyles}>
          <div className="card">
            <h3>Appearance</h3>
            <p>
              Lead (Pb) is a soft, silvery metal in Group 14 of the periodic
              table. It is very malleable, ductile, and dense.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <StaticImage
                src="../../images/lead-cut.jpeg"
                alt="lead image"
                className="little-shadow"
                style={imgStyles}
                width={400}
              />
              <StaticImage
                src="../../images/lead_on_periodic_table.png"
                alt="lead on periodic table"
                className="little-shadow"
                style={imgStyles}
                width={500}
              />
              {/* <StaticImage
                src="../../images/soldering.jpg"
                alt="soldering image"
                className="little-shadow"
                style={imgStyles}
                height={600}
              /> */}

              {/* <a href="https://unsplash.com/photos/RfYU06eTL0s">src</a> */}
              <a href="https://images-of-elements.com/lead.php">src</a>
            </div>
          </div>
          <div className="card">
            <table>
              <tr>
                <td>Melting Point</td>
                <td>327.5 °C (621.5 °F / 600.65 K)</td>
              </tr>
              <tr>
                <td>Boiling Point</td>
                <td>1,749 °C (3,180 °F / 2022.15K)</td>
              </tr>
              <tr>
                <td>Density</td>
                <td>
                  11.29 g/cm<sup>3</sup> at 20 °C (68 °F)
                </td>
              </tr>
            </table>
            <a href="https://www.britannica.com/science/lead-chemical-element">
              src
            </a>
          </div>
        </div>

        <h3>Chemcial Properties</h3>
        <div className="card">
          <h3>Durability</h3>
          <p>
            Lead is very resistant to corrosion but tarnishes upon exposure to
            air. Due to its durability, it was used to make water pipes from
            ancient times in Romans.
          </p>
          <h3>Poisonous</h3>
          <p>
            Lead has been known to be poisonous. [History of treating it as a
            poison]
          </p>
          <h3>Alloys</h3>
          <p>Pewter and solder</p>
          <a href="https://www.lenntech.com/periodic/elements/pb.htm#ixzz7T7S2NZak ">
            src
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChemOfLead;
