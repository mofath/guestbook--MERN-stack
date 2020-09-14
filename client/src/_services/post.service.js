import axios from 'axios'

export default {
    getAllPosts: () => { return axios.get('/posts/') },

    submitPost: (postText) => { return axios.post('/posts/', { postText }); },

    deletePost: (id) => { return axios.delete(`/posts/${id}`); },

    updatePost: (id, newPostText) => { return axios.patch(`/posts/${id}`, { newPostText }); },

    submitReply: ({ id, replyText }) => { return axios.post(`/posts/${id}/reply`, { replyText }); },
}