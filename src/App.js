import React, { Component } from "react";
import axios from "axios";
import "./App.css";
//import Comments from "./components/Comments.js";
import Search from "./components/Search.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchTerm: ''
    };
  }

  componentDidMount() {
    console.log("We won't need to make this an api call.  We can just pass a random video of our choosing in here");

    // axios
    //   .get(
    //     `https://www.googleapis.com/youtube/v3/search?q=${this.state.searchTerm}&key=AIzaSyClhAQZ87dYqVrOTUa5kHGjRUDwPV8wmE8`
    //   )
    //   .then((res) => {
    //     const responseData = res.data;
    //     this.setState({
    //       data: responseData,
    //     });
    //   });
  }

  fetchVideos(searchTerm){
    console.log("SEARCH", searchTerm);
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyClhAQZ87dYqVrOTUa5kHGjRUDwPV8wmE8`
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
      <Search fetchVideos = {(searchTerm) => this.fetchVideos(searchTerm)} />
        <div className="header">
          <h1>Clonetube!</h1>
        </div>

        <div className="split left">
          <div className="centered">
            <h2>
              <b>Related Vidz</b>
            </h2>
          </div>
        </div>

        <div className="split right">
          <div className="centered">
            <h2>
              <b>
                <u>Video Title</u>
              </b>
            </h2>
            <p>Welcome to Clonetube</p>


            <iframe title= "myFrame"
              id="ytplayer"
              type="text/jsx"
              width="800"
              height="400"
              src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
              frameBorder="0"
            ></iframe>

            {/* <Comments /> */}

          </div>
        </div>
      </div>
    );
  }
}
export default App;
