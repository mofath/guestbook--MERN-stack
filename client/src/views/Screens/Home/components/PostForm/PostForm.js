import React, { useState } from 'react';


import classes from './PostForm.module.css';
import Avatar from '../../../../UI/Avatar/Avatar'


const PostForm = ({ submit }) => {
    const [PostText, setPostText] = useState("");
    const [Loading, setLoading] = useState(false);

    const empty = () => PostText.length > 0 ? false : true;

    const submitPost = async () => {
        setLoading(true);
        await submit(PostText);
        setPostText("");
        setLoading(false);
    };

    return (
        <div className="horizontal-layout">
            <div className={[classes.PostForm, "vertical-layout"].join(' ')}>
                <div className={[classes.TextContainer, "horizontal-layout"].join(' ')}>
                    <div> <Avatar /></div>
                    <textarea
                        onChange={(event) => setPostText(event.target.value)}
                        value={PostText}
                        placeholder="Leave a note..."
                    >
                    </textarea>
                </div>

                <button
                    className={classes.SubmitPostBtn}
                    disabled={!(PostText.length > 0) || Loading}
                    onClick={submitPost}
                >
                    {Loading ? <i className="fa fa-spinner fa-spin" /> : "Submit"}
                </button>
            </div>

        </div>
    )
}

export default PostForm;