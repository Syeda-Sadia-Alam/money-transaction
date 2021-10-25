import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
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
        name: 'About Us',
        path: '/about',
    },
    {
        name: 'Contact Us',
        path: '/contact',
    },
    {
        name: 'Login',
        path: '/user/login',
    },
];

const Item = ({ name, path }) => (
    <Box component="li" className={style.navItem}>
        <Link to={path}>{name}</Link>
    </Box>
);
function Navbar() {
    return (
        <Box component="nav" py="0.25rem" maxWidth="700px" width="100%">
            <Box component="ul" className={style.nav}>
                {links.map(({ name, path }) => (
                    <Item key={name} name={name} path={path} />
                ))}
            </Box>
        </Box>
    );
}
export default Navbar;
