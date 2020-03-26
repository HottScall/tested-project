import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

const KEY = "AIzaSyAiK9DXMfQ6s88LZcaPc7ebUlh0_4leHe8";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        key: KEY,
        maxResults: 5
      }
    });
    console.log(response);
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    console.log("From the app", video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
export default App;
