import axios from 'axios';
import { SET_POST, GET_ERRORS, SET_POSTS, SET_CURRENT_POST, DELETE_POST } from './types';

export const createPost = postData => dispatch => {
    axios
        .post('/api/posts/create', postData)
        .then(res => {
            dispatch({ type: SET_POST, payload: res.data });
            dispatch({ type: GET_ERRORS, payload: '' }) // Clear errors after successful post creation
        })
        .catch(error => {
            dispatch({ type: GET_ERRORS, payload: error.response ? error.response.data : 'Unknown error' });
        });
};

export const getPosts = () => dispatch => {
    axios.get('/api/posts/get')
        .then(res => {
            // Ensure the response data contains the expected post array
            if (res.data && Array.isArray(res.data)) {
                dispatch({ type: SET_POSTS, payload: res.data });
            } else {
                console.error("Invalid data format received:", res.data);
            }
        })
        .catch(error => {
            dispatch({ type: GET_ERRORS, payload: error.response ? error.response.data : 'Unknown error' });
        });
};

export const getPostById = (postId) => dispatch => {
    axios.get(`/api/posts/getById/${postId}`)
        .then(res => {
            dispatch({ type: SET_CURRENT_POST, payload: res.data });
        })
        .catch(error => {
            dispatch({ type: GET_ERRORS, payload: error.response ? error.response.data : 'Unknown error' });
        });
};

export const deletePost = (postId) => dispatch => {
    axios.delete(`/api/posts/${postId}`)
        .then(res => {
            dispatch({ type: DELETE_POST, payload: postId });
        })
        .catch(error => {
            dispatch({ type: GET_ERRORS, payload: error.response ? error.response.data : 'Unknown error' });
        });
};
