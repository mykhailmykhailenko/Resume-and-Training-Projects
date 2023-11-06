import React from 'react';
import PropTypes from 'prop-types'

class Counter extends React.Component {
    constructor (props) {
        super(props)
        this.state = { 
            count : 0
        }
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if (nextProps.step !== this.props.step) {
            return false
        }
        return true
    }

    increment = () => {
        this.setState({
            count: this.state.count + this.props.step
        })
    }

    decrement = () => {
            this.setState({
                count: this.state.count - this.props.step
            })
    }
     
    
    render() {
        return this.props.children({
            count: this.state.count,
            increment: this.increment,
            decrement: this.decrement
        });
    }
}

    Counter.defaultProps = {
            step: 5
        }

    Counter.propTypes = {
        step: PropTypes.number
    }

export default Counter;
