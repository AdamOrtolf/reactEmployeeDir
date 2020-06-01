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
                              <th onClick = {() => props.ARRAYFILTERNAMEHERE()}> Employee Name</th>
                              <th onClick = {() => props.ARRAYFILTERNAMEHERE()}> Employee Name</th>
                              <th onClick = {() => props.ARRAYFILTERNAMEHERE()}> Employee Name</th>

                        </tr>

                  </thead>

                  <tbody>



                  </tbody>



            </table>
            </>
      )


}
export default ResultSearch;
