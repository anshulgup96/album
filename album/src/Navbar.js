import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    let { createNewSearchList } = this.props;

    return (
      <div>
        <div className="top-navbar">
          <h1 className="page-title">Albums</h1>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control search-album"
              type="search"
              placeholder="Search for an album"
              onChange={createNewSearchList}
            />
          </form>
        </div>
      </div>
    );
  }
}
