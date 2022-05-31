import React from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

import memories from '../../images/memories.png'
import useStyles from './styles'

const Navbar = () => {
  const classes = useStyles()
  const user = null
  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div>
        <Typography className={classes.heading} component={Link} to="/" variant='h2' align='center'>Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height='60' />
      </div>
      <Toolbar>
        {user ? 
          <div>
            <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Typography>{user.result.name}</Typography>
            <Button variant="contained" onClick={()=>{}}>Logout</Button>
          </div>
        :
          <div>
            <Button component={Link} to="/auth" variant="contained">Sign In</Button>
          </div>}
      </Toolbar>
</AppBar>  )
}

export default Navbar