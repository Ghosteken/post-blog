import { SET_POST, SET_POSTS, SET_CURRENT_POST, DELETE_POST } from "../actions/types";

const initialState = {
    post: {},  // For holding the current post
    posts: []  // For holding the list of posts
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST:
            // Add the new post to the posts array
            return {
                ...state,
                posts: [action.payload, ...state.posts] // Added the new post at the beginning
            };
        case SET_POSTS:
            // Replace the existing posts with the fetched list of posts
            return {
                ...state,
                posts: action.payload
            };
        case SET_CURRENT_POST:
            // Set the current post that is being viewed or edited
            return {
                ...state,
                post: action.payload
            };
        case DELETE_POST:
            // Filter out the deleted post based on the post ID
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload)
            };
        default:
            return state;
    }
};

export { postsReducer };
