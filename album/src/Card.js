import { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.id = props.id;
    this.userID = props.userID;
  }

  render() {
    <div className="card" key={i + 1}>
      <div className="card-body">
        <h5 className="card-title">{album.title}</h5>
        <p className="card-text">Album Id: {album.id}</p>
        <p className="card-text">Album Id: {album.id}</p>
        <a
          href="#"
          className="btn btn-primary"
          onClick={() => this.openAlbum(i)}
        >
          View Album
        </a>
      </div>
    </div>;
  }
}
