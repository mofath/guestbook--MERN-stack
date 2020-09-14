import React from 'react';



import classes from './Form.module.css';

export default function Signup(props) {


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
                        // className={`signup-input ${errors.password && 'inputError'}`}
                        placeholder='Password'
                    />
                </div>

                <div className={[classes.RadioGroup, 'horizontal-layout'].join(' ')}>
                    <p >Are You Attending?</p>
                    <label htmlFor="attend" >
                        <input type="radio" id="attend" name="attendingStatus" value="Attending" checked />
                        &nbsp;&nbsp;Yes
                    </label>
                    <label htmlFor="not-attend" >
                        <input type="radio" id="not-attend" name="attendingStatus" value="Not Attending"  />
                        &nbsp;&nbsp;No
                    </label>
                </div>


                <input type='submit' value='Signup' />

            </div>
        </form>
    )
}