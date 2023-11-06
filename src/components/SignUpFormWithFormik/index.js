import React from 'react';
import {SCHEMA} from '../../schemas';
import styles from './SignUpFormWithFormik.module.css';
import {Formik, Form, Field, ErrorMessage} from 'formik';

function SignUpFormWithFormik ()  {
    
   const formikSubmit = (data, formikBag) => {
        console.log(data);
        formikBag.resetForm();
   }

   const initialValues = {
        firstName: '',
        lastName: '',
        password: '',
        email: ''
    }
        
    return (
        <Formik 
        initialValues = {initialValues}
        onSubmit={formikSubmit}
        validationSchema={SCHEMA}
        >
            {(formikProps) => {
             
                return (

                <Form className={styles.form}>
                    <span className={styles.text}>First Name</span>
                    <Field   
                    name='firstName' 
                    className={styles.input}
                    />
                    <ErrorMessage name='firstName' component='span'/>
                    <span className={styles.text}>Last Name</span>
                    <Field 
                    name='lastName' 
                    className={styles.input}
                    />
                    <ErrorMessage name='lastName' component='span'/>
                    <span className={styles.text}>Email</span>
                    <Field  
                    name='email' 
                    className={styles.input}
                    />
                    <ErrorMessage name='email' component='span'/>
                    <span className={styles.text}>Password</span>    
                    <Field   
                    name='password' 
                    className={styles.input}
                    /> 
                    <ErrorMessage name='password' component='span'/>   
                    <button type='submit' className={styles.button}>Send info</button>
            </Form>
                )
            }}
        </Formik>
    );   
}

export default SignUpFormWithFormik;



