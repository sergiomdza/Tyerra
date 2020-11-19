import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// views
import pantalla1 from './view/pantalla1';
import paginaCasa from './components/paginaCasa';
// import pantalla2 from './view/pantalla2';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={pantalla1} />
        <Route path="/casa" exact component={paginaCasa} />
      </Switch>
    </Router>
  );
}

export default App;
