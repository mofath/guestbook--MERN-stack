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

const INITIAL_STATE = {
    isLoading: null,
    fetchedBefore: false,
    posts: [],

};

function postReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case ADD_NEW_REPLY:
        case EDIT_POST:
        case GET_ALL_POSTS:
        case ADD_NEW_POST:
        case DELETE_POST:
            return {
                ...state,
                isLoading: true,
            };


        case GET_ALL_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload.posts,
                isLoading: false,
                fetchedBefore: true,
            };

        case ADD_NEW_POST_SUCCESS:
            return {
                ...state,
                posts: [action.payload.newAddedPost, ...state.posts],
                isLoading: false,
            };


        case DELETE_POST_SUCCESS:
            return {
                ...state,
                posts: [...state.posts.slice(0, action.payload.index), ...state.posts.slice(action.payload.index + 1)],
                isLoading: false,
            };


        case EDIT_POST_SUCCESS:
            return {
                ...state,

                posts: state.posts.map((item, i) =>
                    i === action.payload.index ?
                        { ...item, postText: action.payload.newPostText } : item),
                isLoading: false,
            };


        case ADD_NEW_REPLY_SUCCESS:
            return {
                ...state,
                posts: state.posts.map((item, i) =>
                    i === action.payload.index ?
                        { ...item, replies: [...item.replies, action.payload.newReply] } : item),
                isLoading: false,
            };


        case ADD_NEW_REPLY_FAIL:
        case EDIT_POST_FAIL:
        case GET_ALL_POSTS_FAIL:
        case ADD_NEW_POST_FAIL:
        case DELETE_POST_FAIL:
            return {
                ...state,
                isLoading: false,
            }

        default:
            return state
    }
}

export {
    postReducer,
}