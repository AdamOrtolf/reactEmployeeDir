import React, {Component} from "react";
import API from "../utils/Api";
import SearchFilter from "./SearchFilter";
import ResultSearch from "./ResultSearch";

class GenerateEmployees extends Component {
      // need to create a state variable that can be used to generate results based upon search keyword.
      state = {
            search: "",
            results: [],
            order: "ascend"

            }


      // ill need an API call function plus a componentDidMount 

      render () {
            return( 

                  <>
                  </>
            )
      }
}