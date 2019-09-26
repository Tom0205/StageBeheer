import React, { Component } from 'react';
import "./Activatie.css";

class Activatie extends Component {
    state = {  }

    render() { 
        return (  
            <div className="formDiv">
                <Header message="Account activatie" />
                <h3>12345@student.roc-nijmegen.nl</h3>
                <input type="text" name="wachtwoord" placeholder="Wachtwoord" />

                <input type="text" name="herhaalwachtwoord" placeholder="Herhaal wachtwoord"></input>
                
                <input type="submit" value="Submit" />
            </div>
        );
    }
}
 
export default Activatie;