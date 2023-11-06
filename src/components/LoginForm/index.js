import React from 'react';
import styles from './LoginForm.module.css';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {SCHEMALoginForm} from '../../schemas';

const LoginForm = () => {

    const formikSubmit = (data, formikBag) => {
        console.log(data);
        formikBag.resetForm()
    }

    const initialValues = {
        email: '',
        pass: '',
        rememberMe: ''
    }

    return (
        <Formik
        initialValues = {initialValues}
        onSubmit={formikSubmit}
        validationSchema={SCHEMALoginForm}
        >
            {() => {
                return (
                <div className={styles.container}>
                    <Form className = {styles['registration-form']}>
                        <div className={styles.header}>
                            <h1 className={styles.title}>LOGIN TO YOUR ACCOUNT</h1>
                            <h2 className={styles['sub-title']}>We aleays keep your name and email address private.</h2>
                        </div>
                        <div className = {styles['input-container']}>
                            <Field  
                            className={styles['user-info']}               
                            name="email" 
                            placeholder="Email" 
                            />
                            <div className={styles['red-text']}>
                                <ErrorMessage name='email' component='span'/>
                            </div>
                            <Field  
                            className={styles['user-info']}               
                            name="pass" 
                            placeholder="Password" 
                            />
                            <div className={styles['red-text']}>
                                <ErrorMessage name='pass' component='span'/>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.row}>
                                <Field 
                                type="checkbox" 
                                name="rememberMe"
                                />
                                <p>Remember me?</p>
                            </div>
                            <div className={styles['red-text']}>
                            <ErrorMessage name='rememberMe' component='span'/>
                            </div>
                            
                            <a className = {styles.link} href='https://www.google.com/' target='blank'>Forgot password</a>
                        </div>
                        <button type='onSubmit' className={styles['create-btn']}>Create account</button>
                        <button className={styles['sing-up-btn']}>Sing up with Google</button>
                    </Form>
                </div>
                )
            }}
        </Formik>
    )
}

export default LoginForm;
