import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';
import RegistrationForm from '../../components/RegistrationForm';
import styles from './LoginPage.module.css';

class LoginPage extends Component {
    constructor (props) {
        super (props)
        this.state = {
            isRegister: false
        }
    }

    clickHandler = () => {
        const {isRegister} = this.state;
        this.setState ({
            isRegister: !isRegister
        })
    }

    render() {
        const {isRegister} = this.state;
        const showComponent = isRegister ? <LoginForm /> : <RegistrationForm />;
        const btnText = isRegister ? 'To Registraton Form' : 'To Login Form';
        return (
            <div className={styles.container}>
                <button onClick={this.clickHandler} className={styles.switchBtn}>{btnText}</button>
                {showComponent}
            </div>
        );
    }
}

export default LoginPage;
