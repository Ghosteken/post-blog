import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPostById } from '../actions/postActions';
import ReactHtmlParser from 'react-html-parser';

const Post = () => {
    const { postId } = useParams(); // Get post ID from URL
    const { post } = useSelector(state => state.posts); // Select post from Redux state
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch the post data on component load or when postId changes
        dispatch(getPostById(postId));
    }, [dispatch, postId]);

    return (
        <div className="container">
            {post ? (
                <>
                    <div>{post.title}</div>
                    <div>{ReactHtmlParser(post.model)}</div>
                    <p>{post.date}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Post;
