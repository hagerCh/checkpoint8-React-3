import React, { Component } from 'react';
import './style.css';

class Loc extends Component{
    render(){
        return( 
            <div className="loc">
                <img className="locImage" src={this.props.url}/> 
                <h2 className="locName">{this.props.name}</h2> 
            </div>
        );
    }
}

export default Loc;