import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    return (
      <div>
        <div className="pageination">
          <div>-</div>
          <div>{this.state.pageNumber}</div>
          <div>+</div>
        </div>
      </div>
    );
  }
}
