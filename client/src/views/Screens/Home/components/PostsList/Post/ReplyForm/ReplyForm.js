import React, { useState } from 'react';

import { BiCommentDetail as ReplyIcon } from 'react-icons/bi';

import classes from './ReplyForm.module.css';

const PostForm = ({ submitReply, index, id }) => {
    const [ReplyText, setReplyText] = useState("");
    const [Show, setShow] = useState(false);
    const [Loading, setLoading] = useState(false);

    const submit = async () => {
        setLoading(true);
        await submitReply({ index, id, replyText: ReplyText });
        setReplyText("")
        setLoading(false)
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
                    <textarea
                        onChange={(event) => setReplyText(event.target.value)}
                        placeholder="Add a reply..."
                        value={ReplyText} 
                    > 
                    </textarea>
                    {ReplyText.length > 0 &&
                        <button
                            className={classes.SubmitBtn}
                            onClick={submit}
                            disabled={Loading}
                        >
                            {Loading ? <i className="fa fa-spinner fa-spin" /> : "Send"}
                        </button>
                    }
                </div>
            }

        </div>
    )
}






export default PostForm;