import React, { Component } from 'react' // imrc

class Keypad extends React.Component { //cc 
    
    password = () => {console.log("Entering password...")}

    render() { 
        return ( 
            <input onKeyUp={this.password} type="password"/>
         );
    }
}
 
export default Keypad;