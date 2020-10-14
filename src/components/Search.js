import React, {Component} from "react";

class Search extends Component {
    state = {
      searchTerm: ''
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
          

          <input
            
            value={this.state.searchTerm}
            onChange={(event) => this.handleOnChange(event)}
            placeholder="Search videos!"
          />
          <button onClick={this.props.fetchVideos(this.state.searchTerm)}>Submit</button>
          
        </div>
      );
    }
  }

export default Search;