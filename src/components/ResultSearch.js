import React from "react";

function ResultSearch(props) {
      return (
            <>
            <table>
                  <thead>
                        <tr>
                              <th>     
                              </th>
                              <th onClick = {() => props.searchArray()}> Employee Name</th>
                              {/* INPUT ARRAYFILTER FUNCTION ABOVE WHEN COMPLETED IN GENERATEEMPLOYEES FILE*/}
                              <th> Email</th>
                              <th> Phone Number </th>
                              <th> Date of Birth </th>

                        </tr>

                  </thead>

                  <tbody className="list-group">
                  
                        {props.results.map((res) => {

                              if (res.name.first.toLowerCase().includes(props.search)) {

                                    return (
                                          <>
                                          <tr className="list-group-item" key={res.login.uuid}>
                                                      <td>
                                                      <img src={res.picture.thumbnail} alt=""/>
                                                      </td>

                                                      <td>
                                                      {res.name.first} {res.name.last}
                                                      </td>

                                                      <td>
                                                      {res.email}
                                                      </td>

                                                      <td>
                                                      {res.dob.date.slice(0, 10)}
                                                      </td>

                                                      <td>
                                                      {res.phone}
                                                      </td>
                                                     
                                                </tr>
                                          </>
                                    )
                              }} 
                              
                        )}


                  </tbody>



            </table>
            </>
      )


}
export default ResultSearch;

//          FOR REFERENCE IN ABOVE FUNCTIONS
// / "email": "anita.akbari@example.com",
// "login": {
// "uuid": "107c3d85-45b1-4d39-a5fe-550b42348c83",
