import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import Post from './Post/Post';
// import useStyles from './styles';

const Posts = ({setCurrentId}) => { 
    const posts = useSelector((state) => {
        console.log(state) //这里的state是combineReducers以后的一个object,posts仅仅是其中的一个，还会用其他的
        return state.posts
    });   
    // const posts = useSelector((state) => state.posts);   
    console.log(posts);
    // const classes = useStyles();
    return (
        !posts.length ? <CircularProgress /> :
            <Grid container alignItems='stretch' spacing={3}>
                {posts && posts.map(post =>
                    <Grid key={post._id} item xs={12} ms={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>                
                    </Grid>
                )}
            </Grid>
        // <>
        //     <h1>POSTS</h1>
        // </>
    );
}

export default Posts;