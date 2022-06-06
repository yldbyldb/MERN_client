import React, {useState} from 'react'
import { Typography, Container, Avatar, Button, Paper, Grid, Icon } from '@material-ui/core'
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined"
 import { GoogleLogin } from "react-google-login"

import Input from './Input'

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false) 
  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => setShowPassword(prevShowPassword => !prevShowPassword)
  const handleSubmit = () => {

  }
  const handleChange = () => {

  }
  const switchMode = () => {
    setIsSignUp(prevIsSignUp => !prevIsSignUp)
    handleShowPassword(false)
  }
  const googleSuccess = () => {
    
  }
  const googleFailure = () => {

  }
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                <Input name='firstName' label='First Name' handleChange={handleChange} half />
              </>

            )}
              <Input name='email' label='Email' handleChange={handleChange} type='email' />
              <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
              {isSignUp && <Input name='password' label='Repeat Password' handleChange={handleChange} type='password' handleShowPassword={handleShowPassword} />}
          </Grid>
          <GoogleLogin
            clientId='GOOGLE ID'
            render={(renderProps) => (
              <Button
                color='primary'
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon/>}
                variant='contained'
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          />
          <Button type="submit" fullWidth variant='contained' color='primary'>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp ? 'Already have an account? Sign in.' : 'Do not have an account? Sign up'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth