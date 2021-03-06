import React from 'react';
import fakeAuth from './auth';
import {withRouter} from 'react-router-dom';




const AuthButton = withRouter(({ history }) => (

  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
 
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

  export default AuthButton;