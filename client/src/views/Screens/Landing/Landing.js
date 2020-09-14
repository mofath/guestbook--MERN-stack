import React from 'react';

import AuthForm from "./Components/AuthForm/AuthForm";
import Branding from "./Components/Branding/Branding"

import classes from './Landing.module.css'


const Landing = () => {
    return (
        <div className={classes.LandingScreen}>

            <div className={classes.AuthFormWrapper}>
                <AuthForm />
            </div>

            <div className={classes.BrandingWrapper}>
                <Branding />
            </div>
        </div>
    )
}

export default Landing;