import React, { Component } from 'react';
import './style.css';

class Chiffres extends Component{
    render(){
        return( 
            <div className="chiffres">
                <h2 className="chiff">{this.props.num}</h2> 
                <p className="chiffDes">{this.props.description}</p> 
            </div>
        );
    }
}

export default Chiffres;