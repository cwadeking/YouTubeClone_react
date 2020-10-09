import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?q={search query}&key={AIzaSyClhAQZ87dYqVrOTUa5kHGjRUDwPV8wmE8}`
      )
      .then((res) => {
        const responseData = res.data;
        this.setState({
          data: responseData,
        });
      });
  }

  searchQuery() {
    this.setState = [];
  }

  render() {
    return (
      <div id="main-content">
        <div className="header">
          <h1>Clonetube!</h1>
        </div>

        <div class="split left">
          <div class="centered">
            {/* <img src="img_avatar2.png" alt="Avatar woman"></img> */}
            <h2>
              <b>Related Vidz</b>
            </h2>
            <p>Insert video title here.</p>
          </div>
        </div>

        <div class="split right">
          <div class="centered">
            {/* <img src="img_avatar.png" alt="Avatar man"></img> */}
            <h2>
              <b>
                <u>Video Title</u>
              </b>
            </h2>
            <p>Import likes as a string.</p>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
