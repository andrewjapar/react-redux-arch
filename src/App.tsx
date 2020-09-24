import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { Nav } from 'Pages/Nav';
import { TheSidebar } from 'Pages/Sidebar';
import User from 'Pages/User/User';

function App() {

  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <Nav />
        <div className="c-body">
          <Switch>
            <Route path="/user" component={User} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
