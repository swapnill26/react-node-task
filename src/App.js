import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Navbar from './component2/Navbar';
import Login from './component2/Login';
import Register from './component2/Register';
import Profile from './component2/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path='/' component={Login}/>
        <div className="container">
          <Route exact path='/register' component={Register}/>
          <Route exact path='/profile' component={Profile}/>
        </div>  
      </div>
    </Router>
  );
}

export default App;
