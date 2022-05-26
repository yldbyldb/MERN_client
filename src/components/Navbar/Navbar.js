import React from 'react'
import { AppBar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

import memories from '../../images/memories.png'
import useStyles from './styles'

const Navbar = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <Typography className={classes.heading} component={Link} to="/" variant='h2' align='center'>Memories</Typography>
      <img className={classes.image} src={memories} alt="memories" height=
    '60' />
</AppBar>  )
}

export default Navbar