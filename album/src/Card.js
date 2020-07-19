import React, { Component } from "react";
import "./App.css";

export default class Card extends Component {
  render() {
    const { title, id, userId, openAlbum } = this.props;
    return (
      <div>
        <div className="card" key={id}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">User ID: {userId}</p>
            <p className="card-text">Album Id: {id}</p>
            <p
              className=" btn btn-primary view-album-button"
              onClick={() => openAlbum(id)}
            >
              View Album
            </p>
          </div>
        </div>
      </div>
    );
  }
}

// onClick={() => this.openAlbum(i)}
