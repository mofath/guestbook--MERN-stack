import React from 'react';

import classes from './PreLoader.module.css';


const PreLoader = () =>
    <div className={classes.PreLoaderContainer}>
        <div className={classes.PreLoader}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={classes.Shadow}></div>
    </div>

export default PreLoader;