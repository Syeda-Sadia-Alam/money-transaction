import {
    AdminPanelSettings as AdminPanelSettingsIcon,
    // AttachMoney as AttachMoneyIcon,
    // CreditCard as CreditCardIcon,
    Dashboard as DashboardIcon,
    LocalAtm as LocalAtmIcon,
    Logout as LogoutIcon,
    Money as MoneyIcon,
    Preview as PreviewIcon,
    Reorder as ReorderIcon,
    Settings as SettingsIcon,
    // eslint-disable-next-line prettier/prettier
    TransferWithinAStation as TransferWithinAStationIcon
} from '@mui/icons-material';

const iconStyles = { fontSize: 'inherit', color: 'inherit' };
const pathPrefix = '/admin';
const links = [
    {
        name: 'Dashboard',
        path: `${pathPrefix}/dashboard`,
        icon: <DashboardIcon style={iconStyles} />,
    },

    {
        name: 'Card View',
        path: `${pathPrefix}/card-view`,
        icon: <PreviewIcon style={iconStyles} />,
    },
    {
        name: 'Card Request',
        path: `${pathPrefix}/card-requests`,
        icon: <ReorderIcon style={iconStyles} />,
    },

    {
        name: 'Withdrawal Request ',
        path: `${pathPrefix}/withdrawal-requests`,
        icon: <LocalAtmIcon style={iconStyles} />,
    },
    {
        name: 'Deposit Request',
        path: `${pathPrefix}/deposit-requests`,
        icon: <MoneyIcon style={iconStyles} />,
    },
    {
        name: 'Transfer Request',
        path: `${pathPrefix}/transfer-requests`,
        icon: <TransferWithinAStationIcon style={iconStyles} />,
    },
    {
        name: 'User Management',
        path: `${pathPrefix}/user-management`,
        icon: <AdminPanelSettingsIcon style={iconStyles} />,
    },
    {
        name: 'Settings',
        path: `${pathPrefix}/settings`,
        icon: <SettingsIcon style={iconStyles} />,
    },
    {
        name: 'Logout',
        path: `${pathPrefix}/logout`,
        icon: <LogoutIcon style={iconStyles} />,
    },
];

export default links;
