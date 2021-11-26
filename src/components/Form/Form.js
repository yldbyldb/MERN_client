import { Button, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';
// import useStyles from './styles';

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFiles: ''
    })
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData))
    }
    const clear = () => {

    }
    
    // const classes = useStyles();
    return (
        // <h1>FORM</h1>
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidthvalue={postData.creator} onChange={e => setPostData({ ...postData, creator: e.target.value })}/>
                <TextField name="title" variant="outlined" label="Title" fullWidthvalue={postData.title} onChange={e => setPostData({ ...postData, title: e.target.value })}/>
                <TextField name="message" variant="outlined" label="Message" fullWidthvalue={postData.message} onChange={e => setPostData({ ...postData, message: e.target.value })}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidthvalue={postData.tags} onChange={e => setPostData({ ...postData, tags: e.target.value })}/>
                <div>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFiles: base64 })}/>
                </div>
                <img src="" alt="" />
                <Button variant="contained" color="primary" size="small" type="submit">Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear}>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;