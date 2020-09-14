import React from 'react';

import { useDispatch } from 'react-redux';
import { signupAction } from "../../../../../../_store/modules/auth/actions";

import SignupForm from './form';

import classes from './Form.module.css';

const initialState = {
    username: '',
    password: '',
    attendingStatus: 'Attending',
};

const Signup = () => {
    const { handleChange, handleSubmit, values, errors } = SignupForm(submit, initialState);


    const dispatch = useDispatch();
    async function submit(signupData) {
        console.log(signupData);
        await dispatch(signupAction(signupData))
    }


    return (
        <form
            className={[classes.Form, 'vertical-layout'].join(' ')}
            onSubmit={handleSubmit}
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
                        // className={`signup-input ${errors.username && 'inputError'}`}
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
                        // className={`signup-input ${errors.password && 'inputError'}`}
                        placeholder='Password'
                    />
                </div>

                <div className={[classes.RadioGroup, 'horizontal-layout'].join(' ')}>
                    <p >Are You Attending?</p>
                    <label htmlFor="attend" >
                        <input type="radio" id="attend" name="attendingStatus" value="Attending" onChange={handleChange} checked />
                        &nbsp;&nbsp;Yes
                    </label>
                    <label htmlFor="not-attend" >
                        <input type="radio" id="not-attend" name="attendingStatus" value="Not Attending" onChange={handleChange} />
                        &nbsp;&nbsp;No
                    </label>
                </div>


                <input type='submit' value='Signup' />

            </div>
        </form>
    )
}

export default Signup;