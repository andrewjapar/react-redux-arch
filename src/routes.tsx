import React from 'react';
import { UserTable } from 'Pages/User/UserTable';

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/user', exact: true,  name: 'User', component: UserTable },
  ];
  
  export default routes;