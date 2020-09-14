import React from 'react';

import classes from './Form.module.css'





function Login(props) {



    return (
        <form

            className={[classes.Form, 'vertical-layout'].join(' ')}
        >
            <div >

                {/* *************** usename input group **************  */}
                <div className={[classes.FormGroup, 'horizontal-layout'].join(' ')}>
                    <label>Username *</label>
                    <input type='text'
                        className={classes.InputElement}
                        name='username'
                        placeholder='Username'
                    />
                </div>

                {/* *************** password input group **************  */}
                <div className={[classes.FormGroup, 'horizontal-layout'].join(' ')}>
                    <label>Code Word *</label>
                    <input type='password'
                        className={classes.InputElement}
                        name='password'
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
// withRouter(Login);