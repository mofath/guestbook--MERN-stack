

import React from 'react';

import { FaQuestion as ConfirmIcon } from 'react-icons/fa';

import classes from './Message.module.css';

const InfoMsg = ({ msgBody, close, callBack }) =>
    <div className={[classes.Msg, classes.Confirm].join(' ')}>
        <i className={classes.Icon}><ConfirmIcon size="45" color="white" /></i>

        <div className={[classes.Content, "vertical-layout"].join(' ')}>
            <h5 className={classes.Title}>Confirm</h5>
            <p>{msgBody}</p>
        </div>
        <div className={classes.Btns}>
            <button onClick={() => {
                callBack();
                close();
            }}>Yes
             </button>
            <button onClick={() => close()}>No</button>
        </div>
    </div>



export default InfoMsg;