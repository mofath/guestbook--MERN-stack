import React from 'react';

import LoginForm from './form';
import classes from './Form.module.css';

const initialState = {
    username: '',
    password: ''
};


const Login = (props) => {
    const { handleChange, handleSubmit, values } = LoginForm(submit, initialState);

    async function submit (loginData) {
        console.log(loginData);
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
                        className={classes.InputElement}
                        name='username'
                        value={values.username}
                        onChange={handleChange}
                        placeholder='Username'
                    />
                </div>

                {/* *************** password input group **************  */}
                <div className={[classes.FormGroup, 'horizontal-layout'].join(' ')}>
                    <label>Code Word *</label>
                    <input type='password'
                        className={classes.InputElement}
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        placeholder='Password'
                    />
                </div>


                {/* *************** submit button **************  */}
                <input type='submit' value='Login' />

            </div>
        </form>
    )
}

export default Login;