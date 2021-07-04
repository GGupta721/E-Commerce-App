import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import './App.css';
import Home from "./Home";
import Header from "./Header";


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}




if (module.hot) {
  module.hot.accept();
}

  

export default App;