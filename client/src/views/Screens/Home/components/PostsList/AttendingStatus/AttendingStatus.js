import React from 'react';

import classes from './AttendingStatus.module.css';

const attend = <div className={classes.AttStatus}></div>
const notAttend = <div className={classes.NotAttStatus}></div>

const AttendingStatus = ({ status }) =>
    <div className="horizontal-layout">
        {status === "attending" ? attend : notAttend}
        <h6>{status}</h6>
    </div>

export default AttendingStatus;