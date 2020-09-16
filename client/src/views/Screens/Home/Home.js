import React, { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { getMessage, displayMessage } from '../../../_store/modules/alert/actions';
import {
    getAllPostsAction,
    submitPostAction,
    deletePostAction,
    editPostAction,
    submitReplyAction
} from '../../../_store/modules/post/actions';
import PostForm from './components/PostForm/PostForm';
import PostsList from './components/PostsList/PostsList';
import Footer from './components/Footer/Footer';
import Spinner from '../../UI/Spinner/Spinner';
import classes from './Home.module.css';
import bg2 from '../../../assets/imgs/bg2.jpg';

const Home = () => {
    const [Loading, setLoading] = useState(false);


    const postReducer = useSelector(state => state.postReducer);
    const authReducer = useSelector(state => state.authReducer);
    const { posts } = postReducer;
    const { isAuthenticated, userInfo } = authReducer;

    const dispatch = useDispatch();


    useEffect(() => {
        (async () => {
            setLoading(true);
            await dispatch(getAllPostsAction())
            setTimeout(() => setLoading(false), 2000);
        })()
    }, []);



    const submitPost = async (postText) => {
        if (isAuthenticated)
            await dispatch(submitPostAction(postText));
        else {
            dispatch(getMessage("Please, Signin", true));
            dispatch(displayMessage('info'));
        }
    }

    const submitReply = async ({ index, id, replyText }) => {
        if (isAuthenticated) await dispatch(submitReplyAction({ index, id, replyText }));
        else {
            dispatch(getMessage("Please, Signin", true));
            dispatch(displayMessage('info'));
        }
    }

    const deletePost = async ({ index, id }) => await dispatch(deletePostAction({ index, id }));

    const editPost = async ({ index, id, newPostText }) => await dispatch(editPostAction({ index, id, newPostText }));

    const authorize = (ownerId) => userInfo && ownerId === userInfo._id ? true : false;


    return (
        <div className={[classes.Home, "vertical-layout"].join(' ')}>
            <section className={classes.HeaderWrapper} >
                <img src={bg2} alt="" />
                <div className={classes.PostFormWrapper}>
                    <PostForm submit={submitPost} />
                </div>
            </section>

            <section className={classes.PostsListWrapper}>
                <div className={[classes.Posts, "vertical-layout"].join(' ')}>
                    {
                        Loading ?
                            <Spinner /> :
                            <Fragment>
                                {posts.length > 0 ?
                                    <PostsList
                                        userInfo={userInfo}
                                        posts={posts}
                                        deletePost={deletePost}
                                        editPost={editPost}
                                        submitReply={submitReply}
                                        authorize={authorize}
                                    />
                                    : <div className={classes.NoNotes}>No Noets</div>
                                }
                            </Fragment>
                    }
                </div>
            </section>
            <Footer />
        </div>
    )

}

export default Home;