import React from 'react';
import styles from './RegistrationForm.module.css';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { SCHEMARegistrationForm } from '../../schemas';

const RegistrationForm = (props) => {

    const formikSubmit = (data, formikBag) => {
        console.log(data);
        formikBag.resetForm()
    }

    const initialValues = {
        firstName : '',
        lastName: '',
        displayName: '',
        email: '',
        pass: '',
        confirmPass: '',
        joinAsCreative: false,
        joinAsBuyer: false,
        allowWithRules: false
    }

    
    return (
        
            <Formik 
            initialValues = {initialValues}
            onSubmit={formikSubmit}
            validationSchema={SCHEMARegistrationForm}
            >
                {() => {
                    return (
                    <div className={styles.container}>
                        <Form className={styles['registration-form']}>
                            <div className={styles.header}>
                                <h1 className={styles.title}>Create an account</h1>
                                <h2 className={styles['sub-title']}>We aleays keep your name and email address private.</h2>
                            </div>
                            <div className={styles['column-input']}>
                                <Field 
                                className={styles['user-info']} 
                                name="firstName" 
                                placeholder="First name" 
                                />
                                <Field 
                                className={styles['user-info']} 
                                name="lastName" 
                                placeholder="Last name"
                                />
                            </div>
                            <div className={styles['red-text']}>
                                <ErrorMessage name='firstName' component='span'/>
                                <ErrorMessage name='lastName' component='span'/>
                            </div>
                            <div className={styles['column-input']}>
                                <Field 
                                className={styles['user-info']} 
                                name="displayName" 
                                placeholder="Display name"  
                                />
                                <Field 
                                className={styles['user-info']} 
                                name="email" 
                                placeholder="Email Address"
                                />
                            </div>
                            <div className={styles['red-text']}>
                                <ErrorMessage name='displayName' component='span'/>
                                <ErrorMessage name='email' component='span'/>
                            </div>
                            <div className={styles['column-input']}>
                                <Field 
                                className={styles['user-info']} 
                                name="pass" 
                                placeholder="Password" 
                                />
                                <Field 
                                className={styles['user-info']}  
                                name="confirmPass" 
                                placeholder="Confirm Password" 
                                />
                            </div>
                            <div className={styles['red-text']}>
                                <ErrorMessage name='pass' component='span'/>
                                <ErrorMessage name='confirmPass' component='span'/>
                            </div>
                            <div className={styles.border}>
                                <div className={styles.row}>
                                    <Field 
                                    type="checkbox"
                                    name="joinAsBuyer" 
                                    />
                                    <p className={styles['big-text']}>Join As a Buyer</p>
                                </div>
                                <span className={styles.text}>I am looking for a Name, Logo or Tagline for my business, brand or product</span>
                                
                            </div>
                            <div className={styles.border}>
                                <div className={styles.row}>
                                    <Field 
                                    type="checkbox" 
                                    name="joinAsCreative"
                                    />
                                    <p className={styles['big-text']}>Join As a Creative</p>
                                </div>
                                <span className={styles.text}>Join As a Creative or Marketplace SellerI plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</span>
                            </div>
                            <div className={styles.row}>
                                <Field 
                                type="checkbox" 
                                name="allowWithRules" 
                                />
                                <p>Allow to send marketing/promotional offers from time to time</p>
                            </div>
                            <div className={styles['red-text']}>
                                <ErrorMessage name='allowWithRules' component='span'/>
                            </div>
                            <button type='onSubmit' className={styles['create-btn']}>Create account</button>
                            <h2 className={styles['sub-title']}>By clicking this button, you agree to our <a href='https://www.google.com/' target='blank'>Terms of Service.</a></h2>
                            <button className={styles['sing-up-btn']}>Sing up with Google</button>
                    </Form>
                </div>
                    )
                }}
        </Formik>
    
    );
}

export default RegistrationForm;
