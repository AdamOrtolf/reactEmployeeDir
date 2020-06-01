import React, {Component} from "react";
import API from "../utils/API";
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
            console.log("input change occured" + event)
            const search = event.target.name;
            const value = event.target.value;
            this.setState({
            [search]: value
            });
      };

      apiCall = () => {
            API.search().then(res => this.setState({ results: res.data.results})).catch(error => console.log(error));
            
      }

      componentDidMount() { 
            this.apiCall();}
      // ask brian if I need anything inside parenthesis of this.apiCall(HERE)//


      searchArray = () => {
            const matchingName = [...this.state.results].sort((b, a) => b.name.first > a.name.first ? 1 : -1)

            this.setState({...this.state, results: matchingName})


      }
      



      // ill need an API call function plus a componentDidMount, a handleinputchange and a function to render array of names based upon this.state.search 

      render () {
            return( 

                  <>

                  <div>
                        <SearchFilter 
                              handleInputChange={this.handleInputChange}
                              search={this.state.search} />

                        <br></br>
                        <br></br>

                        <ResultSearch results={this.state.results} matchingName={this.matchingName} search={this.state.search} order={this.state.order} />


                  </div>

                  <footer>
                        <strong>IF NO EMPLOYEES SHOW FROM YOUR SEARCH THEN EMPLOYEE WAS NOT FOUND IN DATABASE.</strong>
                  </footer>
                  
                  </>
            )
      }
}

export default GenerateEmployees;