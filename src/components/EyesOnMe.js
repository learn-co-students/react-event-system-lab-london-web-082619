import React, {Component} from 'react';

export default class EyesOneMe extends Component {

    focus = () => {
        console.log('Good!')
    }

    blur = () => {
        console.log('Hey! Eyes on me!')
    }

    render(){
        return(
            <button onFocus={this.focus} onBlur={this.blur}>EyesOneMe</button>
        )
    }

}