// Code EyesOnMe Component Here
import React, { Component } from 'react';
import Keypad from './Keypad';

class EyesOnMe extends React.Component {

    focus = () => {console.log('Good!')}
    blur = () => {console.log('Hey! Eyes on me!')}

    render() { 
        return ( 
            <button onBlur={this.blur} onFocus={this.focus}>
                Button
            </button>
         );
    }
}
 
export default EyesOnMe;