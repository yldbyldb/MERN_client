import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts'
// import useStyles from './styles'

const Post = ({ post, setCurrentId }) => {
	// const classes = useStyles()
	console.log(post)
	const dispatch = useDispatch()

	return (
		<Card>
			<CardMedia image={post.selectedFiles} title={post.title} />
			<div>
				<Typography variant='h6'>{post.creator}</Typography>
				<Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
			</div>
			<div>
				<Button style={{ color: 'blue' }} size='small' onClick={() => setCurrentId(post._id)}>
					<MoreHorizIcon fontSize='default' />
				</Button>
			</div>
			<div>
				<Typography variant='body2' color='textSecondary'>{post.tags.map(tag => `#${tag} `)}</Typography>
			</div>
			<CardContent>
				<Typography variant='h3' gutterBottom>{post.title}</Typography>
				<Typography variant='h5' gutterBottom>{post.message}</Typography>
			</CardContent>
			<CardActions>
				<Button size='small' color='primary' onClick={() => dispatch(likePost(post._id))}>
					<ThumbUpAltIcon fontSize='small' />
					&nbsp; Like &nbsp;
					{post.likeCount}
				</Button>
				<Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
					<DeleteIcon fontSize='small' />
					&nbsp; Delete
				</Button>
			</CardActions>
		</Card>
	)
}

export default Post