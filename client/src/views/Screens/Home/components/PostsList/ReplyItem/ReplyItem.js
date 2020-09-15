import React from 'react';

import classes from './ReplyItem.module.css';
import { dynamicFormat } from '../../../../../../_utils/date_format';
import Avatar from '../../../../../UI/Avatar/Avatar';
import AttendingStatus from "../AttendingStatus/AttendingStatus";

const PostItem = ({ reply, allow }) =>
    <div className={classes.ReplyItem}>
        <div className={[classes.ReplyHeader, "horizontal-layout"].join(' ')}>
            <Avatar size="27px" />
            <div className={[classes.UserData, "horizontal-layout"].join(" ")}>
                <div className="vertical-layout">
                    <h5>{reply.writer.username}</h5>
                    <AttendingStatus status={reply.writer.attendingStatus} type="dark" />
                </div>
                <h6>{dynamicFormat(reply.replyDate)}</h6>
            </div>
        </div>
        <div className={classes.ReplyContent}>
            {reply.replyText}
        </div>
        {allow && <button className={classes.CloseBtn}>  &times;</button>}
    </div>


export default PostItem;