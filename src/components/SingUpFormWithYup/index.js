import React, { Component } from 'react';
import {SCHEMA} from '../../schemas';
import styles from './SignUpFormWithYup.module.css';

class SignUpFormWithYup extends Component {
    constructor (props) {
        super (props)
        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            email: ''
        }
    }

    changeHandler = ({target: {name, value}}) => {
        this.setState ({
            [name] : value
        })
    }

    submitHandler = (event) => {
        event.preventDefault(); 
        SCHEMA.validate(this.state)
        .then (data => console.log(data))
        .catch(err => alert(err.message))
    }


    render() {

        const {firstName, lastName, email, password} = this.state;
        return (
            <form className={styles.form} onSubmit={this.submitHandler}>
                <span>First Name</span>
                <input type='text'  
                name='firstName' 
                value={firstName} 
                onChange={this.changeHandler} 
                className={styles.input}/>
                
                <span>Last Name</span>
                <input type='text' 
                name='lastName' 
                value={lastName} 
                onChange={this.changeHandler} 
                className={styles.input}/>

                <span>Email</span>
                <input type='text'  
                name='email' 
                value={email} 
                onChange={this.changeHandler} 
                className={styles.input}/>

                <span>Password</span>    
                <input type='text'  
                name='password' 
                value={password} 
                onChange={this.changeHandler} 
                className={styles.input}/>    

                <button className={styles.button}>Send info</button>
            </form>
        );
    }
}

export default SignUpFormWithYup;



