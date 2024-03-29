import {HomePage, DisplayDataPage, ProfilePage, UsersPage} from './pages';

export default [
  {
    path: '/display-data',
    component: DisplayDataPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/users',
    component: UsersPage
  }
  ];
