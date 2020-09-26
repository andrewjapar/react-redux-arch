import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { TopBarMenu } from 'Containers/Topbar/TopbarMenu';
import { SidebarMenu } from 'Containers/Sidebar/SidebarMenu';
import User from 'Pages/User/User';

function App() {

  return (
    <div className="c-app c-default-layout">
      <SidebarMenu />
      <div className="c-wrapper">
        <TopBarMenu />
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
