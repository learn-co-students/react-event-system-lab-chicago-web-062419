// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {

    handleFocus = event => {
        console.log("Good!")
    }

    handleBlur = event => {
        console.log('Hey! Eyes on me!')
    }



    render() {
        return (
            <div>
                <button onFocus={event => this.handleFocus(event)} onBlur={event => this.handleBlur(event)}></button>
            </div>
        );
    }
}

export default EyesOnMe;