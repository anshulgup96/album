import React, { Component } from 'react';
// import Album from './Album';
import './App.css'

  class App extends Component {
    componentWillMount() {
      fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then((data) => {
        this.setState({ albumList: data })
      })
      .catch(console.log);
    }

    state = {
      albumList: []
    }

    render() {
      console.log(this.state.albumList);
      return (
        <div className="container">
          <h1>Albums</h1>
          <table className="table">
          <th scope='col'>UserID</th>
          <th scope='col'>Album ID</th>
          <th scope='col'>Album Name</th>
            {this.state.albumList.map(album => 
              <tr className='album-card' key={album.id}>
                <td>{album.userId}</td>
                <td>{album.id}</td>
                <td>{album.title}</td>
              </tr>
            )}
          </table>
        </div>
      );
      
    }
  }

  export default App;