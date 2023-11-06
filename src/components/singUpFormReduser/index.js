import React, { useReducer } from 'react';


const reducer = (state, action) => {
    switch (action.type) {
        case 'INPUT CHANGE':
            const {name, value} = action;
            return {
                ...state,
                [name] : value
            }
        default: 
            return state
    }
}

const SingUpFormReduser = () => {

    const [state, dispatch] = useReducer(reducer, {
                                                firstName: '',
                                                lastName: '',
                                                email: '',
                                                password: '',
                                                repassword: '',
                                                isAgree: false
                                                })

    
    const changeHandler = ({target: {name, value}}) => {
        const action = {
            value,
            name,
            type: 'INPUT CHANGE'
        }
        dispatch(action)
    }                                          

    return (
        <div>
            <input type='text' name='firstName' placeholder='firstName' onChange={changeHandler} value={state.firstName}/>
            <input type='text' name='lastName' placeholder='lastName' onChange={changeHandler} value={state.lastName}/>
            <input type='text' name='email' placeholder='email' onChange={changeHandler} value={state.email}/>
            <input type='text' name='password' placeholder='password' onChange={changeHandler} value={state.password}/>
            <input type='text' name='repassword' placeholder='repassword' onChange={changeHandler} value={state.repassword}/>
            <label>
                <input type='checkbox' name='isAgree' onChange={changeHandler} value={state.isAgree}/>
                Do you agree with our rules?
            </label>
        </div>
    );
}

export default SingUpFormReduser;
