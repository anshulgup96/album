import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    let { pageDown } = this.props;
    let { pageUp } = this.props;
    let { pageNumber } = this.props;
    return (
      <div>
        <div className="page-number">
          <button
            className="inline"
            onClick={e => {
              pageDown(e);
            }}
          >
            -
          </button>
          <div className="inline">{pageNumber}</div>
          <button
            className="inline"
            onClick={e => {
              pageUp(e);
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
