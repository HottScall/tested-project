import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube.js";

const KEY = "AIzaSyAiK9DXMfQ6s88LZcaPc7ebUlh0_4leHe8";

class App extends React.Component {
  searchSubmit = userSearch => {
    // console.log(userSearch);
  };

  render() {
    return (
      <div>
        <SearchBar formSubmit={this.searchSubmit} />
      </div>
    );
  }
}

export default App;
