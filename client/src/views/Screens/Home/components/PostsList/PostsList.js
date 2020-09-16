import React from 'react';
import PostHeader from './PostHeader/PostHeader';

import classes from './PostsList.module.css';
import ReplyForm from "./ReplyForm/ReplyForm";
import PostContent from './PostContent/PostContent';
import RepliesList from './RepliesList/RepliesList'



const PostsList = ({ posts, editPost, deletePost, submitReply, userInfo, authorize }) => {

    return (
        <div className={classes.Timeline} >
            {
                posts.map((post, index) => {
                    const { postText, writer: { username, attendingStatus, _id:writerId }, createdAt, replies, _id: id } = post;
                    let authorized = authorize(writerId)
                    return (
                        <div className={classes.Post} key={index}>
                            <PostHeader username={username} createdAt={createdAt} attendingStatus={attendingStatus} />
                            <div className={classes.Content}>
                                <PostContent
                                    content={postText}
                                    deletePost={deletePost}
                                    editPost={editPost}
                                    id={id}
                                    index={index}
                                    authorized={authorized}
                                />
                            </div>
                            <RepliesList replies={replies} authorize={authorize} />
                            <ReplyForm
                                submitReply={submitReply}
                                id={id}
                                index={index}
                            />
                        </div>
                    )
                }) 

            }
        </div>
    )
}


export default PostsList;