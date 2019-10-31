import React from 'react';


class EyesOnMe extends React.Component {

    handleFocus = () => {
        console.log("Good!")
    }
   
    handleBlur = () => {
        console.log("Hey! Eyes on me!")
    }
    

    render() {
        console.log(this.props)
        return (
            <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Test</button>

        )
    }
}

export default EyesOnMe
