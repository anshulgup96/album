import React, { Component } from "react";
// import Album from './Album';
import "./App.css";
// import Pagination from "./Pagination";

class App extends Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(data => {
        this.setState({ searchList: data });
        this.albumList = data;
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

  newDisplay(e) {
    if (e.target.value === "") {
      this.setState({ status: 0 });
    } else {
      this.setState({ status: 1 });
    }
    this.setState({ pageNumber: 1 });
    const checkPrefix = album => album.title.startsWith(e.target.value);
    const newList = this.albumList.filter(checkPrefix);
    this.setState({ searchList: newList });
  }

  state = {
    searchList: [],
    pageNumber: 1,
    status: 0
  };

  render() {
    return (
      <div>
        <div className="top-navbar">
          <h1 className="page-title">Albums</h1>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control search-album"
              type="search"
              placeholder="Search for an album"
              onChange={event => {
                this.newDisplay(event);
              }}
            />
          </form>
        </div>
        <div className="container">
          {this.state.searchList.map((album, i) => {
            if (
              i < this.state.pageNumber * 6 &&
              i >= (this.state.pageNumber - 1) * 6
            ) {
              return (
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
              );
            }
          })}
          <div className="page-number">
            <button
              className="inline"
              onClick={() => {
                this.setState({ pageNumber: this.state.pageNumber - 1 });
              }}
            >
              -
            </button>
            <div className="inline">{this.state.pageNumber}</div>
            <button
              className="inline"
              onClick={() => {
                this.setState({ pageNumber: this.state.pageNumber + 1 });
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
