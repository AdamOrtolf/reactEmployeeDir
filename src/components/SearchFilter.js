import React from "react";

function SearchFilter (props) {
      return (
            <>
            <form>
                  <div className="form-group">
                  <label htmlFor="search">Search:</label>
                        <input
                        onChange={props.handleInputChange}
                        type="text"
                        className="form-control"
                        value={props.search}
                        name="search"
                        placeholder="Search For An Employee By Name"
                        id="search"
                        />



                  </div>
            </form>
            </>
      )
}

export default SearchFilter;