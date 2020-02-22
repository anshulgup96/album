import React, { Component } from "react";

export default class Album extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <table className="table">
          <th scope="col">UserID</th>
          <th scope="col">Album ID</th>
          <th scope="col">Album Name</th>
          {this.state.albumList.map(album => (
            <tr
              className="album-card"
              key={album.id}
              onClick={() => console.log("hello")}
            >
              <td>{album.userId}</td>
              <td>{album.id}</td>
              <td>{album.title}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
