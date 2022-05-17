import React from "react";

const HomeTestingKitsForLead = () => {
  return (
    <div className="background-card">
      <h2>Home Testing Kits for Lead</h2>
      <p>
        Lead test kits use sodium rhodizonate and sodium sulfide to test for
        lead. When lead reacts with rhodizonate-coated swabs, it turns red or
        pink. When lead reacts with sulfide, it turns brown or black. These
        tests can be used to test lead in paints. It’s performed by peeling off
        the painting and swabbing the region with the reagent.
      </p>
      <p>
        Many controversies surround the reliability of these tests. In 2007, the
        Consumer Product Safety Commission tried out 300 different lead tests
        and learned that more than half had false negatives. Some kits couldn’t
        properly identify the lead if there was a non lead based coating.
        Furthermore, it sometimes took the swab hours to change colors which
        confused many consumers. The CPSC recommends that consumers rely on
        professional testing. Not all lead tests hld the same standard. There
        are three lead tests recognized by the EPA. To receive this recognition,
        the test must have a 95% accuracy.
      </p>
      <div className="card">
        <table>
          <caption>EPA - Recognized Lead Test Kits</caption>
          <tr>
            <td>
              <i>
                3M<sup>TM</sup>LeadCheck<sup>TM</sup>
              </i>
            </td>
            <td>
              This lead test kit can reliably determine whether lead is on wood,
              ferrous metal, or drywall and plaster surfaces.
            </td>
          </tr>
          <tr>
            <td>
              <i>D-Lead®</i>
            </td>
            <td>
              This lead test kit is manufactured by ESCA Tech, Inc.. It can
              consistently determine if lead is not present on wood, ferrous
              metal, or drywall and plaster surfaces.
            </td>
          </tr>
          <tr>
            <td>
              <i>State of Massachusetts</i>
            </td>
            <td>
              The EPA recognizes the reliability of the product to determine
              lead on wood, ferrous metal, or drywall and plaster surfaces.
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default HomeTestingKitsForLead;
