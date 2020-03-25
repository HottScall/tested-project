import React from "react";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  formSubmitted = () => {};
  render() {
    return (
      <div>
        <SearchBar formSubmitted={this.formSubmitted} />
      </div>
    );
  }
}

export default App;
