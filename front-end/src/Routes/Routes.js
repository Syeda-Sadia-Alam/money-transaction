import { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import AlertMessage from '../components/AlertMessage/AlertMessage';
import Loader from '../components/Common/Loader';
import appContext from '../context/contexts/appContext';
import aboutPage from '../pages/About';
import adminLoginPage from '../pages/admin/Login';
import AdminProfile from '../pages/admin/Profile';
import contactPage from '../pages/Contact';
import homePage from '../pages/Home';
import servicesPage from '../pages/Services';
import userLoginPage from '../pages/user/Login';
import userSignupPage from '../pages/user/SingUp';
import AdminPrivateRoute from './AdminPrivateRoute';

const routes = [
    {
        component: homePage,
        path: '/',
    },
    {
        component: aboutPage,
        path: '/about',
    },
    {
        component: servicesPage,
        path: '/services',
    },
    {
        component: contactPage,
        path: '/contact',
    },
    {
        component: userLoginPage,
        path: '/user/login',
    },
    {
        component: userSignupPage,
        path: '/user/signup',
    },

    {
        component: adminLoginPage,
        path: '/admin/login',
    },
];

function Routes() {
    const { setUserAndAdminLoggedInStatus } = useContext(appContext);
    useEffect(() => {
        setUserAndAdminLoggedInStatus();
    }, []);
    return (
        <main>
            <AlertMessage />
            <Loader />
            <Switch>
                {routes.map(({ component, path }) => (
                    <Route path={path} exact component={component} key={path} />
                ))}

              
                <AdminPrivateRoute path="/admin/profile">
                    <AdminProfile />
                </AdminPrivateRoute>
            </Switch>
        </main>
    );
}
export default Routes;
