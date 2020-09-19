import React, {
    //   useEffect, useRef,
    useState
} from 'react';

import PostHeader from './PostHeader/PostHeader';

import classes from './Post.module.css';
import ReplyForm from "./ReplyForm/ReplyForm";
import RepliesList from './RepliesList/RepliesList';

// import { TimelineMax } from "gsap/all";
// const tIn = new TimelineMax({ paused: true });
// const tOut = new TimelineMax({ paused: true, delay: 0.3 });

const Post = ({ post, editPost, deletePost, submitReply, userInfo, authorize, index }) => {
    const { postText, writer: { username, attendingStatus, _id: writerId }, createdAt, replies, _id: id } = post;
    let authorized = authorize(writerId)
    // let postRef = useRef(null);

    // const [PlayState, setPlayState] = useState(true);

    const [ContentValue, setcontentValue] = useState(postText);
    const [Type, setType] = useState("display");


    const handleCancel = () => {
        setcontentValue(postText);
        setType("dispay");
    }

    const handleEdit = async () => {
        await editPost({ id: id, index: index, newPostText: ContentValue });
        setType("dispay");
    }

    const handleChange = (e) => {
        setcontentValue(e.target.value);
    }

    const handleDelete = () => {
        // tOut.fromTo(postRef, 1, { opacity: 0 },
        //     { opacity: 1, onComplete: deletePost({ id: id, index: index }) });
        // tOut.play();
        deletePost({ id: id, index: index })
    }


    // useEffect(() => {
    //     tIn.fromTo(postRef, 1, { opacity: 0, y: "20px" }, { opacity: 1, y: "0px", onComplete: () => setPlayState(false) });
    //     // if (PlayState) 
    //     tIn.play();
    // }, []);

    return (
        <div
            className={classes.Post}
            key={index}
        // ref={element => postRef = element}
        >
            <PostHeader username={username} createdAt={createdAt} attendingStatus={attendingStatus} />
            <div className={classes.Content}>
                {
                    Type === "form" ?
                        <div className={[classes.EditPostForm, "vertical-layout"].join(' ')}>
                            <textarea
                                onChange={handleChange}
                                value={ContentValue}
                            />
                            <span className={classes.SaveBtn}>Click to<button onClick={handleCancel}>Cancel</button></span>
                        </div>
                        :
                        <div className={classes.ContentDisplay}

                        >
                            {postText}
                        </div>
                }
                {authorized &&
                    <div className={classes.Btns}>
                        {
                            Type === "form" ?
                                <button onClick={handleEdit} >Save</button>
                                :
                                <button onClick={() => setType("form")} >Edit</button>
                        }
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                }
            </div>
            <RepliesList replies={replies} authorize={authorize} />
            <ReplyForm
                submitReply={submitReply}
                id={id}
                index={index}
            />
        </div>
    )
}

export default Post;