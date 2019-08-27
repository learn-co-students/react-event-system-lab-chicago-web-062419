// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    onFocus = () => {
        console.log("Good!")
    }
    onBlur = () => {
        console.log("Hey! Eyes on me!")
    }

    render() { 
        return ( 
            <button onFocus={this.onFocus} onBlur={this.onBlur}></button>
         );
    }
}
 
export default EyesOnMe;