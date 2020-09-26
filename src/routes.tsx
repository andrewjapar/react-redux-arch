import Dashboard from 'Pages/Dashboard/Dashboard';
import User from 'Pages/User/User';

interface Routes {
  path: string
  exact: boolean
  name: string
  component: React.FC
}

const routes: Routes[] = [
    { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/user', exact: true,  name: 'User', component: User },
  ];
  
export default routes;