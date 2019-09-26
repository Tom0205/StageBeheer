import React, { Component } from 'react';

class Link extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="formDiv">
                <Header message="Wachtwoord vergeten" />
                <input type="text" name="wachtwoord" placeholder="Wachtwoord" />
                <input type="text" name="herhaalwachtwoord" placeholder="Herhaal wachtwoord"></input>
                
                <input type="submit" value="Submit" />
            </div>
         );
    }
}
 
export default Link;