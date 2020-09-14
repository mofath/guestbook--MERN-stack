import React, { useState } from 'react';

import { BiCommentDetail as ReplyIcon } from 'react-icons/bi';

import classes from './ReplyForm.module.css';

const PostForm = ({ submitReply, index, id }) => {
    const [ReplyText, setReplyText] = useState("");
    const [Show, setShow] = useState(false);

    const submit = () => {
        submitReply({index, id, replyText:ReplyText});
    }


    const toggleForm = () => setShow(!Show)

    return (
        <div >
            <span
                onClick={toggleForm}
                className={classes.ReplyBtn}>
                <ReplyIcon color="#b11d75" size="20" />
                 &nbsp;&nbsp;Reply
            </span>
            {
                Show &&
                <div className={[classes.PostForm, "vertical-layout"].join(' ')}>
                    <textarea onChange={(event) => setReplyText(event.target.value)} placeholder="Add a reply..." > </textarea>
                    <span className={classes.SubmitBtn}>Click to
                    <button onClick={submit}>Submit</button></span>
                </div>
            }

        </div>
    )
}






export default PostForm;