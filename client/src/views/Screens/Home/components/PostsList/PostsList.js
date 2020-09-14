import React from 'react';
import PostHeader from './PostHeader/PostHeader';

import classes from './PostsList.module.css';
import ReplyForm from "./ReplyForm/ReplyForm";
import Content from './Content/Content';
import ReplyItem from './ReplyItem/ReplyItem';


const PostsList = ({ posts, editPost, deletePost, submitReply }) => {

    return (
        <div className={classes.Timeline} >
            { posts?
                posts.map((post, index) => {
                    const { postText, writer: { username, attendingStatus }, createdAt, replies, _id: id } = post;
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
                                />
                            </div>
                            {
                                replies.length > 0 ?
                                    replies.map((reply, index) => <ReplyItem key={index} reply={reply} />)
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
                }) :
                <div>no posts</div>
            }
        </div>
    )
}


export default PostsList;