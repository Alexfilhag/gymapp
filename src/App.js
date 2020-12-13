import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CustomerList from './components/CustomerList';
import TrainingList from './components/TrainingList';
import FrontPage from './components/FrontPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          
          <Route path='/' exact component={FrontPage} />
          <Route path='/customerlist' component={CustomerList} />
          <Route path='/traininglist' component={TrainingList} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
