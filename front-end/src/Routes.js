import { Route, Switch } from 'react-router-dom';
import aboutPage from './pages/About';
import adminDashboardPage from './pages/admin/Dashboard';
import adminLoginPage from './pages/admin/Login';
import userManagementPage from './pages/admin/UserManagement';
import contactPage from './pages/Contact';
import homePage from './pages/Home';
import servicesPage from './pages/Services';
import userLoginPage from './pages/user/Login';
import userProfilePage from './pages/user/profile/Profile';
import userSignupPage from './pages/user/SingUp';

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
        component: userProfilePage,
        path: '/user/profile',
    },
    {
        component: adminLoginPage,
        path: '/admin/login',
    },
    {
        component: adminDashboardPage,
        path: '/admin/dashboard',
    },
    {
        component: userManagementPage,
        path: '/admin/users-management',
    },
];

function Routes() {
    return (
        <main>
            <Switch>
                {routes.map(({ component, path }) => (
                    <Route path={path} exact component={component} key={path} />
                ))}
            </Switch>
        </main>
    );
}
export default Routes;
