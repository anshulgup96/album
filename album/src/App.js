import React, { Component } from "react";
// import Album from './Album';
import "./App.css";

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
    albumList: []
  };

  render() {
    return (
      <div className="container">
        <h1>Albums</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">UserID</th>
              <th scope="col">Album ID</th>
              <th scope="col">Album Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.albumList.map((album, i) => (
              <tr
                className="album-card"
                key={i + 1}
                onClick={() => this.openAlbum(i)}
              >
                <td>{album.userId}</td>
                <td>{album.id}</td>
                <td>{album.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
