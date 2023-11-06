import React, { Component } from 'react';
import Counter from '../../components/Counter';

class CounterPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            rangeValue: 1
        }
    }

    changeHandler = ({target: {name, value}}) => {
        this.setState({
            [name] : Number(value)
        })
    }

    

    render() {
        const {rangeValue} = this.state;
        return (
            <div>
                <input type='range' 
                min={1} 
                max={50}
                name='rangeValue'
                value={rangeValue}
                onChange={this.changeHandler}/> 
                <Counter step = {rangeValue}>
                {({count, increment, decrement}) => {
                    return (
                        <>
                            <h1>{count}</h1>
                            <button onClick={increment}>+</button>
                            <button onClick={decrement}>-</button>
                        </>
                    );
                }}
                </Counter>
            </div>
        );
    }
}

export default CounterPage;
