import React from "react";

const cardStyles = {
  backgroundColor: "rgba(255, 255, 255, 0.72)",
  color: "black",
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  padding: 20,
  borderRadius: 20,
};

const FlintWaterCrisis = () => {
  return (
    <div style={cardStyles}>
      <h2>The Flint Water Crisis</h2>
      <p>
        What caused it and how was the crisis corrected? A clear understanding
        of the chemistry involved is important
      </p>
      <p>
        Quick summary: those lead water pipes were there for a long time. It was
        okay, because the water passing the pipe "coated" the surface,
        preventing lead to react with water and so on. Then, Detroit raised the
        price for water supply (the water was from Great Lakes via Detroit's
        water system). Flint (City) kinda refused, and rather built their own
        water pipe system. Obviously, it took a while, so during the
        corporation, they got water from a river (forgot the name). Water from
        the river was very poor, and it's either the poor river water itself or
        the treatment for the water that took the "coats" on the lead pipe off,
        and caused the lead to melt into water (solution)
      </p>
      <h3>To Do</h3>
      <ul>
        <li>Basic structure</li>
        <li>Work distribution: research for each topics</li>
        <li>Styling</li>
      </ul>
    </div>
  );
};

export default FlintWaterCrisis;
