// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

    handleEvent = event => {
        console.log('Entering password...')
    }





    render() {
        return (
            <div>
                <input type="password" onKeyUp={event => this.handleEvent(event)} />
            </div>
        );
    }
}

export default Keypad;