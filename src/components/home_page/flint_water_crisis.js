import React from "react";

const FlintWaterCrisis = () => {
  return (
    <div className="background-card">
      <h2>The Flint Water Crisis</h2>
      <h3>
        A public health crisis that exposed tens of thousands of people to
        dangerous levels of lead.
      </h3>
      <ol>
        <li>
          <h3>Cause</h3>
        </li>
        <div className="card">
          <h3>Switch of Drinking Water Supply</h3>
          <p>
            To save money, the city decided to switch its water supply from
            Detroit's system to their own in 2013. They pumped water from the
            Flint River until they build a new water pipeline from Lake Huron.
            {/* However, issues with the river were ignored; t */}
          </p>
        </div>
        <li>
          <h3>Process</h3>
        </li>
        <div className="card">
          <h3>Old Lead Water Pipes</h3>
          <p></p>
          <h3>Corrosive Water from Flint River</h3>
          <p>
            The river has served as an unofficial waste disposal site from the
            many local industries for more than a century. The corrosive river
            water corroded lead out from old pipes and carried to thousands of
            homes. Furthermore, chlorine, which was put to disinfect the water,
            also corroded the pipe.
          </p>
          <h3>Chlorine</h3>
        </div>
        <li>
          <h3>Correction</h3>
        </li>
        <div className="card"></div>
        <li>
          <h3>Result</h3>
        </li>
        <div className="card"></div>
      </ol>
      <p>
        What caused it and how was the crisis corrected? A clear understanding
        of the chemistry involved is important
      </p>
      <h3>To Do</h3>
      <ul>
        <li>Basic structure</li>
        <li>Work distribution: research for each topics</li>
        <li>Styling</li>
      </ul>
      <a href="https://www.nrdc.org/stories/flint-water-crisis-everything-you-need-know">
        src
      </a>
    </div>
  );
};

export default FlintWaterCrisis;
