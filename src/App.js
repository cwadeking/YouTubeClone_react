import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Comments from "./components/Comments.js";
import Search from "./components/Search.js";

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
        `https://www.googleapis.com/youtube/v3/search?q=sheep&key=AIzaSyClhAQZ87dYqVrOTUa5kHGjRUDwPV8wmE8`
      )
      .then((res) => {
        const responseData = res.data;
        this.setState({
          data: responseData,
        });
      });
  }

  render() {
    return (
      <div id="main-content">
        <div className="header">
          <h1>Clonetube!</h1>
        </div>

        <div class="split left">
          <div class="centered">
            <h2>
              <b>Related Vidz</b>
            </h2>
            
          </div>
        </div>

        <div class="split right">
          <div class="centered">
            <h2>
              <b>
                <u>Video Title</u>
              </b>
            </h2>
            <p>Import likes as a string.</p>
            <Search />
            <Comments />
          </div>
        </div>
      </div>
    );
  }
}
export default App;


