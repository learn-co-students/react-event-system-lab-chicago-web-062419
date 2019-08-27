// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

    handlePassword = () => {
        console.log("Entering password...")
    }

    render() { 
        return ( 
            <input type="password" onKeyUp={this.handlePassword} />
         );
    }
}
 
export default Keypad;