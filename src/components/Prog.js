import React, { Component } from 'react';
import './style.css';

class Prog extends Component{
    render(){  
        return( 
            <div className="prog" style={{backgroundColor: this.props.color}}>
                <h2 className="progName">{this.props.name}</h2>
                <hr/>
                <p className="progDes">{this.props.description}</p>
                <button style={{color: this.props.color}}>En savoir plus</button>
            </div>
        );
    }
}

export default Prog;