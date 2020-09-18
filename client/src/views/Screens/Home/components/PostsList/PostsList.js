import React from 'react';

import Post from "./Post/Post";
import classes from './PostsList.module.css';

const PostsList = ({ posts, editPost, deletePost, submitReply, userInfo, authorize }) =>
    <div className={classes.Timeline} >
        {
            posts.map((post, index) =>
                <Post
                    key={index}
                    post={post}
                    editPost={editPost}
                    deletePost={deletePost}
                    submitReply={submitReply}
                    userInfo={userInfo}
                    authorize={authorize}
                    index={index}
                />
            )
        }
    </div>

export default PostsList;