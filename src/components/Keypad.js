// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{
    render() {
        return (
            <div>
                <input type="password" onKeyUp={()=> console.log('Entering password...')}></input>
                
            </div>
        )
    }
}
export default Keypad