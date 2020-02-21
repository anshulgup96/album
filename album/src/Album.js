import React, { Component } from 'react';

export default class Album extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <h1>List of albums</h1>
                {this.state.list.map(item => 
                )}
            </div>
        )
    }
}