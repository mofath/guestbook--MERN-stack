import React, { useState } from 'react';


import classes from './PostForm.module.css';
import Avatar from '../../../../UI/Avatar/Avatar';


const PostForm = ({ submit, loading }) => {
    const [PostText, setPostText] = useState("");
    const submitPost = () => submit(PostText);

    return (
        <div className="horizontal-layout">
            <div className={[classes.PostForm, "vertical-layout"].join(' ')}>
                <div className={[classes.TextContainer, "horizontal-layout"].join(' ')}>
                    <div> <Avatar /></div>
                    <textarea onChange={(event) => setPostText(event.target.value)} placeholder="Leave a note..." > </textarea>
                </div>

                <button
                    className={loading ? classes.LoadingBtn : classes.SubmitPostBtn}
                    onClick={submitPost}>
                    Submit
                </button>
            </div>

        </div>
    )
}

export default PostForm;