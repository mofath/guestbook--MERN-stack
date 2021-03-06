import React, { useEffect, useState } from 'react';

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { signupAction } from "../../../../../../_store/modules/auth/actions";
import SignupForm from './form';
import classes from './Form.module.css';

const initialState = {
    username: '',
    password: '',
    attendingStatus: 'attending',
};


const Signup = () => {
    const [Loading, setLoading] = useState(false);
    const { handleChange, handleSubmit, values, errors } = SignupForm(submit, initialState);

    const authReducer = useSelector(state => state.authReducer);
    const alertReducer = useSelector(state => state.alertReducer)

    const { isAuthenticated, isLoading } = authReducer;
    const { id } = alertReducer

    const history = useHistory();
    useEffect(() => {
        if (id === "REGISTER_REQUEST") {
            if (isAuthenticated && !isLoading) history.replace('/home')
        }
    }, [isAuthenticated]);

    const dispatch = useDispatch();
    async function submit(signupData) {
        // console.log(signupData);
        setLoading(true)
        await dispatch(signupAction(signupData))
        setLoading(false)
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
                        placeholder='Code Word'
                    />
                </div>
                {errors.password && <small className={classes.Error}>{errors.password}</small>}


                <div className={[classes.RadioGroup, 'horizontal-layout'].join(' ')}>
                    <p >Are You Attending?</p>
                    <label htmlFor="attend" >
                        <input type="radio" id="attend" name="attendingStatus" value="attending" onChange={handleChange} checked />
                        &nbsp;&nbsp;Yes
                    </label>
                    <label htmlFor="not-attend" >
                        <input type="radio" id="not-attend" name="attendingStatus" value="not attending" onChange={handleChange} />
                        &nbsp;&nbsp;No
                    </label>
                </div>


                <button
                    className={classes.SubmitBtn}
                    type='submit'
                    disabled={!(values.password.length > 0 && values.username.length > 0) || Loading}
                >
                    {Loading ? <span><i className="fa fa-spinner fa-spin" />&nbsp;&nbsp;Loading</span> : "Sign Up"}
                </button>

            </div>
        </form>
    )
}

export default Signup;