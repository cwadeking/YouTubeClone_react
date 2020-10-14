import React, {Component} from "react";

class Search extends Component {
    handleOnChange = (e) => {
      this.props.editSearchTerm(e);
    };
  
    render() {
      return (
        <div>
          <input
            type="text"
            value={this.props.searchTerm}
            onChange={this.handleOnChange}
            placeholder="Search videos!"
          />
        </div>
      );
    }
  }

export default Search;