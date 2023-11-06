import React, { Component } from 'react';


class Greeting extends Component {
    constructor (props) {
        super ()
        this.state = {
            isGreeting: true
        }
    }

    changeGreeting = () => {
        const {isGreeting} = this.state;
        this.setState({
            isGreeting: !isGreeting
        })
    }

    render () {
        const {isGreeting} = this.state;
        const {name} = this.props;
        const greeting = isGreeting ? 'Hello' : 'Bye-bye';
        return (
            <div>
            <h1 onClick={this.changeGreeting}>{greeting}, {name}</h1>  
            </div>
        );
    }
}

export default Greeting;
