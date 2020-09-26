import React from 'react';
import './App.scss';
import { TopBarMenu } from 'Containers/Topbar/TopbarMenu';
import { SidebarMenu } from 'Containers/Sidebar/SidebarMenu';
import MainLayout from 'Containers/Layout/MainLayout';

function App() {

  return (
    <div className="c-app c-default-layout">
      <SidebarMenu />
      <div className="c-wrapper">
        <TopBarMenu />
        <div className="c-body">
          <MainLayout />
        </div>
      </div>
    </div>
  );
}

export default App;
