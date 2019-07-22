import React from 'react';
import fakeAuth from './auth';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }



  login = () => {
      

    document.cookie = "cookiename=admincookie; expires= Wed, 21 Aug 2019 20:00:00 UTC";
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    }
    )
  }


  render() {
    const { from } = this.props.location.state 
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <p>You must log in to view the page</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default Login;