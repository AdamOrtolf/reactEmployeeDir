import React from "react";

function ResultSearch(props) {
      return (
            <>
            <table>
                  <thead>
                        <tr>
                              <th>     
                              </th>
                              <th onClick = {() => props.ARRAYFILTERNAMEHERE()}> Employee Name</th>
                              {/* INPUT ARRAYFILTER FUNCTION ABOVE WHEN COMPLETED IN GENERATEEMPLOYEES FILE*/}
                              <th> Email</th>
                              <th> Phone Number </th>
                              <th> Date of Birth </th>

                        </tr>

                  </thead>

                  <tbody>



                  </tbody>



            </table>
            </>
      )


}
export default ResultSearch;
