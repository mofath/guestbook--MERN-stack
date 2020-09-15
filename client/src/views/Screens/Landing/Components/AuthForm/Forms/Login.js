import React, { useEffect } from 'react';

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import LoginForm from './form';
import classes from './Form.module.css';
import { loginAction } from "../../../../../../_store/modules/auth/actions";

const initialState = {
    username: '',
    password: ''
};


const Login = (props) => {
    const { handleChange, handleSubmit, values, errors } = LoginForm(submit, initialState);

    const authReducer = useSelector(state => state.authReducer);
    const alertReducer = useSelector(state => state.alertReducer)
    const { isAuthenticated, isLoading } = authReducer;
    const { id } = alertReducer

    const history = useHistory();
    useEffect(() => {
        if (id === "LOGIN_REQUEST") {
            if (isAuthenticated && !isLoading) history.replace('/home')
        }
    }, [isAuthenticated]);

    const dispatch = useDispatch();
    async function submit(loginData) {
        await dispatch(loginAction(loginData))
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={[classes.Form, 'vertical-layout'].join(' ')}
        >
            <div >

                {/* *************** usename input group **************  */}
                <div className={[classes.FormGroup, 'horizontal-layout'].join(' ')}>
                    <label>Username *</label>
                    <input type='text'
                        className={[classes.InputElement, errors.username && classes.InputError].join(' ')}
                        name='username'
                        value={values.username}
                        onChange={handleChange}
                        placeholder='Username'
                    />
                </div>
                {errors.username && <small className={classes.Error}>{errors.username}</small>}


                {/* *************** password input group **************  */}
                <div className={[classes.FormGroup, 'horizontal-layout'].join(' ')}>
                    <label>Code Word *</label>
                    <input type='password'
                        className={[classes.InputElement, errors.password && classes.InputError].join(' ')}
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        placeholder='Password'
                    />
                </div>
                {errors.username && <small className={classes.Error}>{errors.username}</small>}



                {/* *************** submit button **************  */}
                <input type='submit' value='Login' />

            </div>
        </form>
    )
}

export default Login;