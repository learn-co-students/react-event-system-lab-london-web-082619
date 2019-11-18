// Code Keypad Component Here


import React from 'react';

class Keypad extends React.Component {

handleKeyUp = (event) => {
    console.log("Entering password...")
    console.log(event.type)
    
}

    render() {
        console.log(this.props)
        return (
        
            <input type="password" onKeyUp={this.handleKeyUp}/>
        )
    }
}




export default Keypad