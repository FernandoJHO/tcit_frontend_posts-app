import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainView from './MainView';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



class App extends Component {


  render() {
    return (
      <div>
     
        <BrowserRouter>
            <Switch>
              <Route path="/" name="Home" component={MainView} />
            </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
