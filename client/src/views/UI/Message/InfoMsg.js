import React from 'react'

import { FaExclamation as WarnningIcon } from 'react-icons/fa'
import { MdDone as DoneCIcon } from 'react-icons/md'

import classes from './Message.module.css'

const InfoMsg = ({ msgBody, msgError, close }) =>
    <div className={[classes.Msg, msgError ? classes.Warn : classes.Success, "vertical-layout"].join(' ')}>
        <i className={classes.Icon}>{msgError ? <WarnningIcon size="45" color="white" /> : <DoneCIcon size="45" color="white" />}</i>
        <div className={[classes.Content, "vertical-layout"].join(' ')}>
            <h5 className={classes.Title}>{msgError ? "Error!" : "Success"}</h5>
            <p>{msgBody}</p>
        </div>
        <div className={classes.Btns}>
            <button onClick={() => close()}>OK</button>
        </div>
    </div>

export default InfoMsg;