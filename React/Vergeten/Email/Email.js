import React, { Component } from 'react';

class Email extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="formDiv">
                <Header message="Wachtwoord vergeten" />
                <input type="text" name="email" placeholder="Email" />
                <input type="submit" value="Submit" />

                <h4>U krijgt een link naar je mail gestuurd zodra je je email hebt verzonden.</h4>
            </div>
         );
    }
}
 
export default Email;