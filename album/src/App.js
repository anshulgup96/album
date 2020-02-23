import React, { Component } from "react";
// import Album from './Album';
import "./App.css";
// import Pagination from "./Pagination";

// Implement pagination
// Implement search functionality

class App extends Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(data => {
        this.setState({ albumList: data });
      });
  }

  openAlbum(key) {
    key = key + 1;
    fetch("https://jsonplaceholder.typicode.com/albums/" + key + "/photos")
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }

  state = {
    albumList: [],
    pageNumber: 1
  };

  render() {
    return (
      <div>
        <div className="top-navbar">
          <h1 className="page-title">Albums List</h1>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control search-album"
              type="search"
              placeholder="Search for an album"
            />
          </form>
        </div>
        <div className="container">
          {this.state.albumList.map((album, i) => (
            <div className="card" key={i + 1}>
              <div className="card-body">
                <h5 className="card-title">{album.title}</h5>
                <p className="card-text">Album Id: {album.id}</p>
                <p className="card-text">Album Id: {album.id}</p>
                <p
                  className="btn btn-primary"
                  onClick={() => this.openAlbum(i)}
                >
                  View Album
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
