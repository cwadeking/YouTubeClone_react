import React, { Component } from "react";

class Search extends Component {
  state = {
    searchTerm: "",
  };

   handleSubmit= (e)=>{
    e.preventDefault();
    this.props.fetchVideos(this.state.searchTerm)
   }
    handleOnChange = (event) => {
      console.log("event", event.target.value);
      this.setState({
        searchTerm:event.target.value
      })
    };
  
    render() {
      return (
        <div>
          
        <form onSubmit = {this.handleSubmit}>
          <input type = "text" value={this.state.searchTerm}
            onChange={(event) => this.handleOnChange(event)}
            placeholder="Search videos!"
          />
          <button type = "submit">Submit</button>
          </form>
        </div>
      );
    }

  }


export default Search;
