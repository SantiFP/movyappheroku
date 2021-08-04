import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp'
import { Login } from './pages/Login';
import { Movies } from './pages/Movies';
import './index.css'

function App() {
  return (
    
    <Router>
        <Switch>
          <Route path='/' exact>
           <Home/>
          </Route>
        </Switch>
        <Switch>
          <Route path='/signUp' exact>
            <SignUp/>
          </Route>
        </Switch>
        <Switch>
          <Route path='/login' exact>
            <Login/>
          </Route>
        </Switch>
        <Switch>
          <Route path='/movies' exact>
            <Movies/>
          </Route>
        </Switch>
    </Router>
  )
}

export default App;
