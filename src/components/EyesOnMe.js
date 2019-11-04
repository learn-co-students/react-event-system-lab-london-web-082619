// Code EyesOnMe Component Here
import React from'react';

export default class EyesOnMe extends React.Component {

    render() {
        return (
            <button onFocus={inFocus => {console.log('Good!')}} onBlur={outOfFocus => {console.log('Hey! Eyes on me!')}}/>
        )
    }

}
