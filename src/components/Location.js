import React, { Component } from 'react';
import './style.css';
import Loc from './Loc';

class Location extends Component{
    render(){
        return( 
            <div className="location"> 
                <h1>Où se passent les sessions?</h1>
                <p>Les sessions de passent dans les hackerspace de Sfax, Sousse et Tunis.</p>
                <div className="row">
                <Loc url="http://www.iapss.org/wp/wp-content/uploads/2017/10/Tunis-WL.jpg" name="TUNIS" className="col-md-4"/>
                <Loc url="https://tunigazette.com/wp-content/uploads/2017/09/%D8%B3%D9%88%D8%B3%D8%A9.jpg" name="SOUSSE" className="col-md-4"/>
                <Loc url="https://s-i.huffpost.com/gen/1511785/images/n-SFAX-628x314.jpg" name="SFAX" className="col-md-4"/>
                </div>
            </div>
        );
    }
}

export default Location;