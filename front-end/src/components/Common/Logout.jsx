import { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import appContext from '../../context/contexts/appContext';

const Logout = ({ isAdmin }) => {
    const { setUserAndAdminLoggedInStatus } = useContext(appContext);

    useEffect(() => {
        if (isAdmin) {
            localStorage.removeItem('admin-auth-token');
        } else {
            localStorage.removeItem('user-auth-token');
        }
        setUserAndAdminLoggedInStatus();
    }, []);
    return <Redirect to={isAdmin ? '/admin/login' : '/user/login'} />;
};

export default Logout;
