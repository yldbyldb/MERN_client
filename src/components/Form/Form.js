import { Button, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
// import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFiles: ''
    })
    const dispatch = useDispatch()
    const post = useSelector(state => currentId ? state.posts.find(post => post._id === currentId) : null)

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData))
        }
        clear()
    }
    const clear = () => {
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFiles: ''
        });
        setCurrentId(null)
    }
    
    // const classes = useStyles();
    return (
        // <h1>FORM</h1>
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={e => setPostData({ ...postData, creator: e.target.value })}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={e => setPostData({ ...postData, title: e.target.value })}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={e => setPostData({ ...postData, message: e.target.value })}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={e => setPostData({ ...postData, tags: e.target.value })}/>
                <div>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFiles: base64 })}/>
                </div>
                <img src="" alt="" />
                <Button variant="contained" color="primary" size="small" fullWidth type="submit">Submit</Button>
                <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear}>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;