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
          <h3>Cause & Result</h3>
        </li>
        <div className="card">
          <h3>Lack of Money</h3>
          <p>
            Flint’s population plummeted due to the rising oil prices and auto
            imports which laid-off many workers. The majority of the population
            was African American, and about 45% lived in poverty. Because of the
            economic downfall, Michigan Governor Rick Synder arranged an
            emergency manager.
          </p>
          <h3>Switch of the Water Supply</h3>
          <p>
            In 2013, the decision was made to end the pipe treated water for
            residents in Detroit for a cheaper option. They decided to use the
            Flint River for pumping water until a new pipeline from Lake Huron
            was built. During this time, many of the city’s residents complained
            of the water’s smell, taste, and appearance. They raised health
            concerns such as rashes and hair losses. These issues were ignored
            and discredited even though numerous residents complained of the
            water. The contaminated water caused the city's children's blood
            lead levels to double.
          </p>
          <h3>Result</h3>
          <p>
            The river has served as an unofficial waste disposal site for many
            local industries for more than a century. The corrosive river water
            corroded lead out from old pipes and carried to thousands of homes.
            Furthermore, chlorine, which was put to disinfect the water, also
            corroded the pipe. Flint’s water supply not only was toxic but it
            led to an outbreak of Legionnaires' disease, a severe form of
            pneumonia. This outbreak killed 12 and hospitalized more than 87
            people. This was the third largest outbreak recorded.
          </p>

          {/* <h3>Old Lead Water Pipes</h3>
          <h3>Corrosive Water from Flint River</h3>
          <h3>Chlorine</h3> */}
        </div>
        <li>
          <h3>Solution</h3>
        </li>
        <div className="card">
          <ul>
            <li>Free water bottles and filters</li>
            <li>FAST Start Program</li>
            <dd>
              Lead services lines connect with the water to thousands of homes.
              The goal of this program was to upgrade the pipes.
            </dd>

            <p>
              However, as of October 2018, only 7,500 pipes have been upgraded.
              Replacing the pipes with plastic pipes and switching back
              Detroit’s water supply serves as the most efficient and permanent
              solution. However, 1.5 billion in cost is needed to fund this
              plan. At the moment an alternate solution is using filtered water.
            </p>

            <li>Use water filter</li>
            <dd>
              Installing home filtration systems removes lead and gives the
              citizens a temporary solution. Some water filters use carbon to
              filter out the lead. The activated carbon acts like a magnet.
              Heavy metals such as lead get stuck to the carbon. The filter
              needs to be replaced regularly when the carbon attracts too much
              of impurties and uses all of its space.
            </dd>
          </ul>
        </div>
      </ol>
    </div>
  );
};

export default FlintWaterCrisis;
