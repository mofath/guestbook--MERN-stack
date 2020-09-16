import React, { useState } from 'react';

import Login from './Forms/Login';
import Signup from './Forms/Signup';
import classes from './AuthForm.module.css';


const AuthForm = () => {
    const [Display, setDisplay] = useState('signup');

    const changeDisplay = () => {
        let display = Display === 'signup' ? 'login' : 'signup';
        setDisplay(display)
    }

    return (
        <div className={classes.AuthForm}>
            <h1>Mona & Ahmed Wedding</h1>
            <h3>You're Invited To Mona & Ahmed Wedding Reception On 15 November 2018.</h3>
            
            {Display === 'signup' ? <Signup /> : <Login />}

            <div className={[classes.FormBtmSection, "horizontal-layout"].join(' ')}>
                <p>{Display === 'signup' ? 'Already Have an Account?' : 'Create an Account?'}</p>
                <span>
                    <button
                        className={classes.ToggleFormBtn}
                        onClick={changeDisplay}
                    >
                        {Display === 'signup' ? 'Log In' : 'Sign Up'}
                    </button>
                </span>
            </div>
        </div>
    )
}

export default AuthForm;