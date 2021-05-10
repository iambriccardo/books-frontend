import Landing from 'screens/Landing';
import Explore from 'screens/Explore';
import Sell from 'screens/Sell';
import Profile from 'screens/Profile';
import Book from 'screens/Book';
import Dashboard from 'screens/Dashboard';
import Authorization from 'screens/Authorization';
import SellBookDialog from 'components/SellBookDialog';
import { SellRemoveDialog } from 'screens/Sell/Sell.jsx';
import Confirm from 'screens/Confirm';
import {
  AUTH_ROUTE,
  BOOK_ROUTE,
  CONFIRM_ROUTE,
  DASHBOARD_ROUTE,
  EDIT_PROFILE_ROUTE,
  EDIT_SELL_ROUTE,
  EXPLORE_ROUTE,
  LANDING_ROUTE,
  NEW_SELL_ROUTE,
  PROFILE_ROUTE,
  REMOVE_SELL_ROUTE,
  SELL_ROUTE,
} from './helpers';
import EditProfileDialog from '../components/profile/EditProfileDialog';

const routes = [
  {
    path: LANDING_ROUTE,
    isExact: true,
    isProtected: false,
    component: Landing,
  },
  {
    path: CONFIRM_ROUTE,
    isExact: true,
    isProtected: true,
    component: Confirm,
  },
  {
    path: AUTH_ROUTE,
    isExact: true,
    isProtected: false,
    component: Authorization,
  },
  {
    path: BOOK_ROUTE,
    isExact: true,
    isProtected: true,
    component: Book,
  },
  {
    path: DASHBOARD_ROUTE,
    isExact: false,
    isProtected: true,
    component: Dashboard,
    routes: [
      {
        path: EXPLORE_ROUTE,
        isExact: false,
        isProtected: true,
        component: Explore,
      },
      {
        path: SELL_ROUTE,
        isExact: false,
        isProtected: true,
        component: Sell,
        routes: [
          {
            path: NEW_SELL_ROUTE,
            isExact: false,
            isProtected: true,
            component: SellBookDialog,
          },
          {
            path: EDIT_SELL_ROUTE,
            isExact: false,
            isProtected: true,
            component: SellBookDialog,
          },
          {
            path: REMOVE_SELL_ROUTE,
            isExact: false,
            isProtected: true,
            component: SellRemoveDialog,
          },
        ],
      },
      {
        path: PROFILE_ROUTE,
        isExact: false,
        isProtected: true,
        component: Profile,
        routes: [
          {
            path: EDIT_PROFILE_ROUTE,
            isExact: false,
            isProtected: true,
            component: EditProfileDialog,
          },
        ],
      },
    ],
  },
];

export default routes;
