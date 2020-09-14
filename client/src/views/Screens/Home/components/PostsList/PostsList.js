import React from 'react';
import PostHeader from './PostHeader/PostHeader';

import classes from './PostsList.module.css';
import ReplyForm from "./ReplyForm/ReplyForm";
import Content from './Content/Content';
import ReplyItem from './ReplyItem/ReplyItem';


const PostsList = ({ posts, editPost, deletePost, submitReply, userInfo }) => {

    return (
        <div className={classes.Timeline} >
            {posts.length > 0 ?
                posts.map((post, index) => {
                    const { postText, writer: { username, attendingStatus, _id:writerId }, createdAt, replies, _id: id } = post;
                    const allow = userInfo && writerId === userInfo._id? true : false
                    return (
                        <div className={classes.Post} key={index}>
                            <PostHeader username={username} createdAt={createdAt} attendingStatus={attendingStatus} />
                            <div className={classes.Content}>
                                <Content
                                    content={postText}
                                    deletePost={deletePost}
                                    editPost={editPost}
                                    id={id}
                                    index={index}
                                    allow={allow}
                                />
                            </div>
                            {
                                replies.length > 0 ?
                                    replies.map((reply, index) => <ReplyItem key={index} reply={reply} allow={allow} />)
                                    :
                                    null
                            }
                            <ReplyForm
                                submitReply={submitReply}
                                id={id}
                                index={index}
                            />
                        </div>
                    )
                }) 
                :
                <div className={classes.NoNotes}>No Noets</div>
            }
        </div>
    )
}


export default PostsList;