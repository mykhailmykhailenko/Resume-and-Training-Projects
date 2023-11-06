import React, { Component } from 'react';
import Lamp from './Lamp';
import Sibling from './Sibling';

class Scene extends Component {
    constructor (props) {
        super (props)
        this.state = {
            toggler: true
        }
    }

    switcher = () => {
        this.setState({
            toggler: !this.state.toggler
        })
    }

    render() {
        return (
            <div>
                <Lamp togglerState = {this.state.toggler} callBackParent = {this.switcher}/>
                <Sibling togglerText = {this.state.toggler}/>
            </div>
        );
    }
}

export default Scene;
