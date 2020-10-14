import React, {Component} from "react";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A comment was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="submitComment">
        <form onSubmit={this.handleSubmit}>
          <label>
            Comment:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <div></div>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Comments;

