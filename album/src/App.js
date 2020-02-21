import React, { Component } from 'react';
// import Album from './Album';

  class App extends Component {
    componentDidMount() {
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
        <div>
          <h1>Hello world</h1>
          {this.state.albumList.map(album => 
            <div key={album.id}>
              <span>{album.userid}</span>
              <span>{album.id}</span>
              <span>{album.title}</span>
            </div>
          )}
        </div>
      );
      
    }
  }

  export default App;