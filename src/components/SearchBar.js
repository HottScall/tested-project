import React from "react";

class SearchBar extends React.Component {
  state = { userSearch: " " };

  userSearchTerm = event => {
    this.setState({ userSearch: event.target.value });
  };

  formSubmitted = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div className="form container">
          <form onSubmit={this.formSubmitted}>
            <div className="field"></div>
            <label>Enter Your Search</label>
            <input onChange={this.userSearchTerm} type="text" />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
