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
            // !!ASK BRIAN IF THIS SHOULD BE "ASCEND" OR "ASCENDING", can't seem to find appropriate syntax on google

            }
      handleInputChange = event => {
            const search = event.target.name;
            const value = event.target.value;
            this.setState({
            [search]: value
            });
      };


      // ill need an API call function plus a componentDidMount, a handleinputchange and a function to render array of names based upon this.state.search 

      render () {
            return( 

                  <>
                  </>
            )
      }
}

export default GenerateEmployees;