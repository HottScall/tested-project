import React from "react";

class SearchBar extends React.Component {
  state = { userSearch: " " };

  userSearchTerm = event => {
    this.setState({ userSearch: event.target.value });
  };

  userSearchSubmit = event => {
    event.preventDefault();

    // this.props.userSearchSubmit(this.state.userSearch);
  };

  render() {
    return (
      <div className="container">
        <div className="form container">
          <form onSubmit={this.userSearchSubmit}>
            <div className="field"></div>
            <label>Enter Your Search</label>
            <input
              type="text"
              value={this.state.userSearch}
              onChange={this.userSearchTerm}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
