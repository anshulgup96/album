import React, { Component } from "react";
// import Album from './Album';
import "./App.css";
import Navbar from "./Navbar";
// import Pagination from "./Pagination";
import Card from "./Card";
import Pagination from "./Pagination";

class App extends Component {
  constructor(props) {
    super(props);
    this.createNewSearchList = this.createNewSearchList.bind(this);
    this.openAlbum = this.openAlbum.bind(this);
    this.pageDown = this.pageDown.bind(this);
    this.pageUp = this.pageUp.bind(this);
  }

  //Loads all the albums on mounting of app component

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(data => {
        this.setState({ searchList: data });
        this.albumList = data;
      });
  }

  //If view album button is clicked, gets album information

  openAlbum(key) {
    key = key + 1;
    fetch("https://jsonplaceholder.typicode.com/albums/" + key + "/photos")
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }

  //Button does nothing if no more albums to show - pageDown and pageUp

  pageDown(e) {
    if (this.state.pageNumber > 1) {
      this.setState({ pageNumber: this.state.pageNumber - 1 });
    }
  }

  pageUp(e) {
    if (this.state.pageNumber < this.state.searchList.length / 6) {
      this.setState({ pageNumber: this.state.pageNumber + 1 });
    }
  }

  createNewSearchList(e) {
    this.setState({ pageNumber: 1 });
    const checkPrefix = album => album.title.startsWith(e.target.value);
    const newList = this.albumList.filter(checkPrefix);
    this.setState({ searchList: newList });
  }

  state = {
    searchList: [],
    pageNumber: 1
  };

  render() {
    return (
      <div>
        <Navbar createNewSearchList={this.createNewSearchList} />
        <div className="container">
          {this.state.searchList.map((album, i) => {
            if (
              i < this.state.pageNumber * 6 &&
              i >= (this.state.pageNumber - 1) * 6
            ) {
              return (
                <Card
                  openAlbum={this.openAlbum}
                  title={album.title}
                  id={album.id}
                  userId={album.userId}
                  key={album.id}
                />
              );
            }
          })}
          <Pagination
            pageDown={this.pageDown}
            pageUp={this.pageUp}
            pageNumber={this.state.pageNumber}
          />
        </div>
      </div>
    );
  }
}

export default App;
