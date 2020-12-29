import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './paginas/Login';
import Comidas from './paginas/Comidas';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ Comidas } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
