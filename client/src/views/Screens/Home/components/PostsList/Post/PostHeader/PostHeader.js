import React from 'react';

import { FaGlobeAfrica } from 'react-icons/fa';

import Avatar from '../../../../../../UI/Avatar/Avatar';
import AttendingStatus from '../AttendingStatus/AttendingStatus';
import classes from './PostHeader.module.css';
import { dynamicFormat } from '../../../../../../../_utils/date_format'

const PostHeader = ({ username, createdAt, attendingStatus }) => <div className="horizontal-layout">
    <Avatar />
    <div className={["vertical-layout", classes.UserData].join(' ')}>
        <h5>{username}</h5>
        <h6 className={classes.Time}>{dynamicFormat(createdAt)}&nbsp;&#183;&nbsp;<span><FaGlobeAfrica /></span></h6>
        <AttendingStatus status={attendingStatus} type="light" />
    </div>
</div>

export default PostHeader;