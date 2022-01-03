import {
    CreditCard as CreditCardIcon,
    Dashboard as DashboardIcon,
    Logout as LogoutIcon,
    ManageAccounts as ManageAccountsIcon,
    Message as MessageIcon,
    People as PeopleIcon,
    // eslint-disable-next-line prettier/prettier
    RequestPage as RequestPageIcon
} from '@mui/icons-material';

const iconStyles = { fontSize: 'inherit', color: 'inherit' };
const links = [
    {
        name: 'Dashboard',
        path: '/admin/profile?tab=dashboard',
        icon: <DashboardIcon style={iconStyles} />,
    },
    {
        name: 'Cards Management',
        path: '/admin/profile?tab=cards-management',
        icon: <CreditCardIcon style={iconStyles} />,
    },
    {
        name: 'Requests Management',
        path: '/admin/profile?tab=requests-management',
        icon: <RequestPageIcon style={iconStyles} />,
    },
    {
        name: 'Users Management',
        path: '/admin/profile?tab=users-management',
        icon: <PeopleIcon style={iconStyles} />,
    },
    {
        name: 'Contact Messages',
        path: '/admin/profile?tab=contact-messages',
        icon: <MessageIcon style={iconStyles} />,
    },

    {
        name: 'Setting',
        path: '/admin/profile?tab=setting',
        icon: <ManageAccountsIcon style={iconStyles} />,
    },
    {
        name: 'Logout',
        path: '/admin/profile?tab=logout',
        icon: <LogoutIcon style={iconStyles} />,
    },
];
export default links;
