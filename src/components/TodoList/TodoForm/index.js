import React, { Component } from 'react';
import styles from './TodoForm.module.css';
import cx from 'classnames';

class TodoForm extends Component {
    constructor (props) {
        super (props)
        this.state = {
            todo: '',
            isInputValid: true
        }
    }
    changeHandler = ({target: {value, name}}) => {
        if (value.includes(' ')) {
            this.setState({
                isInputValid: false
            })
        } else {
            this.setState({
                isInputValid: true
            })
        }
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        const {sendDataToParent} = this.props;
        const {todo} = this.state;

        event.preventDefault();

        sendDataToParent(todo);

        this.setState({
            todo: ''
        })
    }

    render() {
        const {todo, isInputValid} = this.state;

        const cnames = cx([styles.input], {
            [styles.valid]: isInputValid,
            [styles.invalid]: !isInputValid
        });
        
        return (
          <form onSubmit={this.submitHandler} className= {styles.container}>
            <input type='text' 
            placeholder='enter your plan' 
            name='todo' value={todo} 
            onChange={this.changeHandler}
            className= {cnames}/>
            <button className={styles.btn}>Add plan</button>
          </form>
        );
    }
}

export default TodoForm;


