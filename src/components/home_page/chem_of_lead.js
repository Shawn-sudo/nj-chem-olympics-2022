import React from "react";

const cardStyles = {
  backgroundColor: "rgba(128, 128, 128, 0.08)",
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  padding: 20,
  borderRadius: 20,
};

const ChemOfLead = () => {
  return (
    <div style={cardStyles}>
      <div
        style={{
          display: "flex",
          // probably using gridview is better here
          justifyContent: "space-between",
          // change the direction as the screen size changes
        }}
      >
        <div>
          <h2>Chemistry of Lead</h2>
          <p>
            todo: The chemistry of lead (both physical and chemical properties)
          </p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            height: "100px",
            width: 100,
          }}
        >
          <p>(later) A 3D lead model here</p>
          {/* Possibly: Putting the 3D model on the top of the column can be better to gain more focus */}
        </div>
      </div>
    </div>
  );
};

export default ChemOfLead;
