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
    axios.get(`https://www.googleapis.com/youtube/v3/search?q={search query}&key={AIzaSyClhAQZ87dYqVrOTUa5kHGjRUDwPV8wmE8}`).then((res) => {
      const responseData = res.data;
      this.setState({ 
        data: responseData
       });
    });
  }



  

  render() {
    return (
      <div className="header">
        <h1 style={{ backgroundColor: "forestgreen" }}>Clonetube!</h1>



        <div class="split left">
          <div class="centered">
            <img src="img_avatar2.png" alt="Avatar woman">
           <h2>Jane Flex</h2>
           <p>Some text.</p>
      </div>
</div>

<div class="split right">
  <div class="centered">
    <img src="img_avatar.png" alt="Avatar man">
    <h2>John Doe</h2>
    <p>Some text here too.</p>
  </div>
</div>





      </div>
    );
  }
}
export default App;
