import React from 'react';
import { BrowserRouter , Route ,Link } from 'react-router-dom';
import  Public from './public';
import Protected from './protected';
import Movies from './movies';
import Login from './login';
import ProtectedRoute from './ProtectedRoute';
import AuthButton from './AuthButton';

class App extends React.Component {
  render(){

  
  return (
    <div className="App">

      <BrowserRouter>
      <div>
      <AuthButton/>
      <ul>
          <li><Link to="/public">Public Page</Link></li>
          <li><Link to="/protected">Protected Page</Link></li>
          <li><Link to="/movies">Movies Page</Link></li>
        </ul>
        <Route path="/public" component={Public}/>
        <Route path="/login" component={Login}/>
        <ProtectedRoute path='/protected' component={Protected} />
        <ProtectedRoute path='/movies' component={Movies} />
  </div>
</BrowserRouter>
    </div>
  );
}
}

export default App;
