import React, { Component } from 'react';
import { Route } from 'react-router-dom';


import Profile from './container/Profile/Profile';
import Favorite from './container/Favorites/Favorites'
import Navigation from './components/Nav/Navigation';
import ProjectDetails from './container/ProjectDetails/ProjectDetails'

import './App.css';

class App extends Component {
  render() {
    return (
  

<React.Fragment>
<Navigation />
<main>
<Route path="/project_details" component={ProjectDetails}  />

  <Route path="/" component={Profile} exact />
  <Route path="/favorites" component={Favorite}  />
</main>
</React.Fragment>


    );
  }
}

export default App;
