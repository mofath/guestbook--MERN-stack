import React from "react";

import classes from "./RepliesList.module.css";
import ReplyItem from './ReplyItem/ReplyItem';


const RepliesList = ({ replies, authorize }) => replies.length > 0 ?
    replies.map((reply, index) => {
        const authorized = authorize(reply.writer._id)
        return <ReplyItem key={index} reply={reply} authorized={authorized} />
    })
    : null


export default RepliesList;