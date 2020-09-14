import {
    GET_ALL_POSTS,
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_FAIL,

    ADD_NEW_POST,
    ADD_NEW_POST_SUCCESS,
    ADD_NEW_POST_FAIL,

    DELETE_POST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAIL,

    EDIT_POST,
    EDIT_POST_SUCCESS,
    EDIT_POST_FAIL,

    ADD_NEW_REPLY,
    ADD_NEW_REPLY_SUCCESS,
    ADD_NEW_REPLY_FAIL,
} from './types'


import postService from '../../../_services/post.service'
import { getMessage } from '../alert/actions';
let msgBody = null;


const getAllPostsAction = () => async (dispatch) => {
    dispatch({ type: GET_ALL_POSTS });
    try {
        const { data } = await postService.getAllPosts();
        dispatch(getMessage(data.message.msgBody, false, GET_ALL_POSTS))
        dispatch({ type: GET_ALL_POSTS_SUCCESS, payload: { posts: data.posts } });
    }
    catch (error) {
        msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
        dispatch(getMessage(msgBody, true, GET_ALL_POSTS))
        dispatch({ type: GET_ALL_POSTS_FAIL });
    }
}


const submitPostAction = (postId) => async (dispatch) => {
    dispatch({ type: ADD_NEW_POST });
    try {
        const { data } = await postService.submitPost(postId)
        dispatch(getMessage(data.message.msgBody, data.message.msgError, ADD_NEW_POST))
        console.log(data.newAddedPost);
        dispatch({ type: ADD_NEW_POST_SUCCESS, payload: { newAddedPost: data.newAddedPost } });
    }
    catch (error) {
        msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
        dispatch(getMessage(msgBody, true, ADD_NEW_POST))
        dispatch({ type: ADD_NEW_POST_FAIL });
    }
}


const deletePostAction = ({ id, index }) => async (dispatch) => {
    dispatch({ type: DELETE_POST });
    try {
        const { data } = await postService.deletePost(id);
        dispatch(getMessage(data.message.msgBody, data.message.msgError, DELETE_POST))
        dispatch({ type: DELETE_POST_SUCCESS, payload: { index } });
    }
    catch (error) {
        msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
        dispatch(getMessage(msgBody, true, DELETE_POST))
        dispatch({ type: DELETE_POST_FAIL });
    }
}

const editPostAction = ({ id, index, newPostText }) => async (dispatch) => {
    dispatch({ type: EDIT_POST });
    try {
        console.log(id, index, newPostText);
        const { data } = await postService.updatePost(id, newPostText);
        dispatch(getMessage(data.message.msgBody, data.message.msgError, EDIT_POST))
        dispatch({ type: EDIT_POST_SUCCESS, payload: { index, newPostText } });
    }
    catch (error) {
        msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
        dispatch(getMessage(msgBody, true, EDIT_POST))
        dispatch({ type: EDIT_POST_FAIL });
    }
}


const submitReplyAction = ({index, id, replyText}) => async (dispatch) => {

    dispatch({ type: ADD_NEW_REPLY });
    try {
        const { data } = await postService.submitReply({id, replyText})
        dispatch(getMessage(data.message.msgBody, data.message.msgError, ADD_NEW_REPLY))
        console.log(data.newAddedReply);
        dispatch({ type: ADD_NEW_REPLY_SUCCESS, payload: { index, newReply: data.newReply } });
    }
    catch (error) {
        msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
        dispatch(getMessage(msgBody, true, ADD_NEW_REPLY))
        dispatch({ type: ADD_NEW_REPLY_FAIL });
    }
}




export {
    getAllPostsAction,
    submitPostAction,
    deletePostAction,
    editPostAction,
    submitReplyAction,
};
