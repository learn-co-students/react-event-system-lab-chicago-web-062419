import React from 'react';

class Keypad extends React.Component {

  logPassword = () => console.log('Entering password...')

  render() {
    return (
      <div>
        <input 
          type="password"
          onKeyUp={this.logPassword} 
        />
      </div>
    )
  }
}

export default Keypad;