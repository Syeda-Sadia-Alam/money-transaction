import { Box } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import appContext from '../../context/contexts/appContext';
import style from './style.module.css';

const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Services',
        path: '/services',
    },
    {
        name: 'About',
        path: '/about',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
];

const Item = ({ name, path }) => (
    <Box component="li" className={style.navItem}>
        <Link to={path}>{name}</Link>
    </Box>
);
function Navbar() {
    const {
        state: { isLoggedInAdmin, isLoggedInUser },
    } = useContext(appContext);

    return (
        <Box component="nav" py="0.25rem" maxWidth="700px" width="100%">
            <Box component="ul" className={style.nav}>
                {links.map(({ name, path }) => (
                    <Item key={name} name={name} path={path} />
                ))}

                {isLoggedInAdmin ? (
                    <Item name="Admin Profile" path="/admin/profile" />
                ) : (
                    <Item name="Admin Login" path="/admin/login" />
                )}

                {isLoggedInUser ? (
                    <Item name="User Profile" path="/user/profile" />
                ) : (
                    <Item name="User Login" path="/user/login" />
                )}
            </Box>
        </Box>
    );
}
export default Navbar;
