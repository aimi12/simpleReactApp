import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomePage from '../Homepage/Homepage';
import Profile from '../Profile/Profile';
import ForgotPassword from '../PasswordManagement/ForgotPassword';
import Products from '../Products/Products';
import ProductDetails from '../Products/ProductDetails';
import Login from '../Login/Login';
import ChangePassword from '../PasswordManagement/ChangePassword';
import UnAuthorized from './UnAuthorized';

const Breadcrumbs = () => {

    const routes = [
        { path: '/', name: 'Home', exact: true, component: HomePage },
        { path: '/Dashboard', name: 'Dashboard', component: HomePage },
        { path: '/Profile', name: 'Profile', component: Profile },
        { path: '/fgtpwsd', name: 'Forget Password', component: ForgotPassword },
        { path: '/Product', name: 'Product', component: Products },
        { path: '/Product/:id', name: ':id', component: ProductDetails },
        { path: '/SignIn', name: 'Sign-In', component: Login },
        { path: '/Profile/changepwsd', name: 'Change Password', component: ChangePassword },
        { path: '/unauthorized', name: 'Unauthorized', component: UnAuthorized },
      
      ];
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <div>
        
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const routeName = routes.find(route => route.path === to)?.name;

                    return (
                         <span key={to}>{last ? (<span>{routeName}</span>) : (<Link to={to}>{routeName}</Link>)} / </span>
                        );
                }
                )}
            
        </div>

  );

};

export default Breadcrumbs;