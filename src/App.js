import React from 'react';
import { Route } from "react-router-dom";
import './App.css';

import HomePage from './pages/homepage/homepage.component'

const MansPage = () => (<div>
  <h1>Mans</h1>
</div>)



function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/mans" component={MansPage}></Route>
    </div>
  );
}

export default App;
