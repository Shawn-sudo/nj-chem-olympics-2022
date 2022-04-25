import React from "react";

const cardStyles = {
  backgroundColor: "rgba(128, 128, 128, 0.08)",
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  padding: 20,
  borderRadius: 20,
};

const HealthHazardsForLeadExposure = () => {
  return (
    <div style={cardStyles}>
      <h2>Health Hazards For Lead Exposure</h2>
    </div>
  );
};

export default HealthHazardsForLeadExposure;
