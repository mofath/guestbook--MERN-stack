import React from 'react';

import classes from './AttendingStatus.module.css';

const attend = <div className={classes.Attend}></div>
const notAttend = <div className={classes.NotAttend}></div>

const AttendingStatus = ({ status, type }) =>
    <div className={[classes.Status, "horizontal-layout"].join(' ')}>
        {status === "attending" ? attend : notAttend}
        <h6 style={{color: type ==="dark"? "": "#96968e" }} >{status}</h6>
    </div>

export default AttendingStatus;