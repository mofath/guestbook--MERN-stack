import React from "react";

import PostForm from './components/PostForm/PostForm';
import PostsList from './components/PostsList/PostsList';

import { useDispatch, useSelector } from 'react-redux';


import { getAllPostsAction, submitPostAction, deletePostAction, editPostAction, submitReplyAction } from '../../../_store/modules/post/actions';

import classes from './Home.module.css';
import bg2 from '../../../assets/imgs/bg2.jpg';


const Home = () => {
    const postReducer = useSelector(state => state.postReducer);
    const authReducer = useSelector(state => state.authReducer);
    const { posts } = postReducer;
    const { isAuthenticated } = authReducer;


    const dispatch = useDispatch();

    const submitPost = (postText) => {
        if (isAuthenticated) dispatch(submitPostAction(postText));
        else {
            // dispatch(displayMessage('info'));
        }
    }


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
                    <PostsList />
                </section>
            </main>
        </div>
    )

}

export default Home;