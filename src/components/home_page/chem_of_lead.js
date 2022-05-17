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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <div style={{ maxWidth: 400 }}>
                <ul>
                  <li>Silvery</li>
                  <li>Turns a blueish gray when exposed to air</li>
                  <dd>Lead oxidizes</dd>
                  <li>Malleable enough to be scratched by a fingernail</li>
                  <li>Good conductor (poor insulator)</li>
                  <li>
                    Other properties: Dense, fusible, low melting point, low
                    boiling point
                  </li>
                  <li>
                    Commonly appears in lead compounds rather than the pure form
                    in nature
                  </li>
                </ul>
              </div>
              <StaticImage
                src="../../images/lead-cut.jpeg"
                alt="lead image"
                className="little-shadow"
                style={imgStyles}
                width={400}
              />
            </div>
          </div>

          <div className="card">
            <table>
              <tr>
                <td>Atomic Weight</td>
                <td>207.19 Daltons</td>
              </tr>
              <tr>
                <td>Melting Point</td>
                <td>327.5 °C (621.5 °F / 601 K)</td>
              </tr>
              <tr>
                <td>Boiling Point</td>
                <td>1,744 °C (3,171 °F / 2017K)</td>
              </tr>
              <tr>
                <td>Density</td>
                <td>
                  11.29 g/cm<sup>3</sup> at 20 °C (68 °F)
                </td>
              </tr>
            </table>
            <StaticImage
              src="../../images/lead_on_periodic_table.png"
              alt="lead on periodic table"
              className="little-shadow"
              style={imgStyles}
              width={350}
            />
          </div>

          <div className="card">
            <h3>Principle Lead-Ore Compounds</h3>
            <table>
              <tr>
                <th>Compounds</th>
                <th>Formula</th>
                <th>Lead Percent</th>
                <th>Hardness (mohs scale)</th>
                <th>Color</th>
              </tr>
              <tr>
                <td>Galena</td>
                <td>PbS</td>
                <td>86.6%</td>
                <td>2.5 to 2.75</td>
                <td>Lead gray</td>
              </tr>
              <tr>
                <td>Cerussite</td>
                <td>PbCO3</td>
                <td>77.5%</td>
                <td>3 to 3.5</td>
                <td>Colorless to white</td>
              </tr>
              <tr>
                <td>Anglesite</td>
                <td>PbSO4</td>
                <td>68.3%</td>
                <td>2.5 to 3</td>
                <td>Colorless to white</td>
              </tr>
            </table>
          </div>
        </div>

        <h3>Chemcial Properties</h3>
        {/* todo */}
        <div className="card">
          {/* <h3>Durability</h3>
          <p>
            Lead is very resistant to corrosion but tarnishes upon exposure to
            air. Due to its durability, it was used to make water pipes from
            ancient times in Romans.
          </p> */}
          {/* <h3>Poisonous</h3>
          <p>
            Lead has been known to be poisonous. [History of treating it as a
            poison]
          </p> */}
          {/* <h3>Alloys</h3>
          <p>Pewter and solder</p> */}
        </div>
      </div>
      {/* <StaticImage
                  src="../../images/soldering.jpg"
                  alt="soldering image"
                  className="little-shadow"
                  style={imgStyles}
                  height={600}
                /> */}

      {/* <a href="https://unsplash.com/photos/RfYU06eTL0s">src</a> */}
    </div>
  );
};

export default ChemOfLead;
