import React, { useEffect } from 'react'

import { TiWarningOutline as WarnningIcon } from 'react-icons/ti'
import { IoIosCheckmarkCircleOutline as DoneCIcon } from 'react-icons/io'

import classes from './Message.module.css'

const AutoClearMsg = ({ msgBody, msgError, close }) => {

    useEffect(() => {
        let timerId = null;
        timerId = setTimeout(() => close(), 700)
        return () => { clearTimeout(timerId) };
    }, []);

    return (
        <div className={[classes.Msg, msgError ? classes.Warn : classes.Success, "vertical-layout"].join(' ')}>
            <i className={classes.Icon}>{msgError ? <WarnningIcon size="45" color="white" /> : <DoneCIcon size="45" color="white" />}</i>
            <div className={[classes.Content, "vertical-layout"].join(' ')}>
                <h5 className={classes.Title}>{msgError ? "Error!" : "Success"}</h5>
                <p>{msgBody}</p>
            </div >
        </div >
    )
}


export default AutoClearMsg;
