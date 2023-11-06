import * as yup from 'yup';

export const SCHEMA = yup.object({
    firstName: yup.string().required().min(1).max(200), 
    lastName: yup.string().required().min(1).max(200),
    email: yup.string().email('Email must contains @ and .').required(),
    password: yup.string().required().min(8).max(200).matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Pass must contains at least one big letter, one small letter, one number and one special symbol #?!@$ %^&*- '),
})

export const SCHEMARegistrationForm = yup.object({
    firstName: yup.string().required().min(1).max(200),
    lastName: yup.string().required().min(1).max(200),
    displayName: yup.string().required().min(1).max(200),
    email: yup.string().email('Email must contains @ and .').required(),
    pass: yup.string().required().min(8).max(200).matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, 'Pass must contains one big letter, one small letter and one number'),
    confirmPass: yup.string().oneOf([yup.ref('pass'), null], 'Passwords must match one to the other').required().min(8).max(200),
    allowWithRules: yup.string().required('Allow with our rules, for continue'),
})


export const SCHEMALoginForm = yup.object({
    email: yup.string().email('Email must contains @ and .').required(),
    pass: yup.string().required().min(8).max(200).matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, 'Pass must contains one big letter, one small letter and one number')
})