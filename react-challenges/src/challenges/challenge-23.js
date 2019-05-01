import React from 'react'

export default class Challenge extends React.Component {

    state = {
        counter: 0
    }

    render(){
        // Use setState to change the counter to one more than it's previous value
        return (
            <h1 onClick={() => {
                this.setState({ counter: undefined })
            }} >The Count: { undefined /* Render the counter here */ }</h1>
        )
    }

}