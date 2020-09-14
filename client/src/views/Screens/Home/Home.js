import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';

import { getMessage, displayMessage } from '../../../_store/modules/alert/actions';
import { getAllPostsAction, submitPostAction, deletePostAction, editPostAction, submitReplyAction } from '../../../_store/modules/post/actions';
// import { AuthMsg } from "../../../../../assets/data/msgs";


import PostForm from './components/PostForm/PostForm';
import PostsList from './components/PostsList/PostsList';

import classes from './Home.module.css';
import bg2 from '../../../assets/imgs/bg2.jpg';

const Home = () => {
    const postReducer = useSelector(state => state.postReducer);
    const authReducer = useSelector(state => state.authReducer);
    const { posts } = postReducer;
    const { isAuthenticated } = authReducer;

    const dispatch = useDispatch();

    useEffect(() => { dispatch(getAllPostsAction()) }, []);

    const submitPost = (postText) => {
        // if (isAuthenticated) 
        dispatch(submitPostAction(postText));
        // else {
            // dispatch(getMessage(AuthMsg, true));
            // dispatch(displayMessage('info'));
        // }
    }

    const submitReply = ({ index, id, replyText }) => {
        if (isAuthenticated) dispatch(submitReplyAction({ index, id, replyText }));
        else {
            // dispatch(getMessage(AuthMsg, true));
            // dispatch(displayMessage('info'));
        }
    }

    const deletePost = ({ index, id }) => dispatch(deletePostAction({ index, id }));
    const editPost = ({ index, id, newPostText }) => dispatch(editPostAction({ index, id, newPostText }));

    return (
        <div className={[classes.Home, "vertical-layout"].join(' ')}>
            <header className={classes.HeaderWrapper} >
                <img src={bg2} alt="" />
                <section className={classes.PostFormWrapper}>
                    <PostForm submit={submitPost} />
                </section>
            </header>

            <main className={classes.PostsListWrapper}>
                <section className={[classes.Posts, "vertical-layout"].join(' ')}>
                    <PostsList
                        posts={posts}
                        deletePost={deletePost}
                        editPost={editPost}
                        submitReply={submitReply}
                    />
                </section>
            </main>
        </div>
    )

}

export default Home;