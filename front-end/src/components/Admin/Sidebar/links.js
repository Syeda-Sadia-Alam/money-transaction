import {
    AdminPanelSettings as AdminPanelSettingsIcon,
    AttachMoney as AttachMoneyIcon,
    CreditCard as CreditCardIcon,
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

const pathPrefix = '/admin';

const links = [
    {
        name: 'Dashboard',
        path: `${pathPrefix}/dashboard`,
        icon: <DashboardIcon />,
        isNotList: true,
    },
    {
        name: 'Card Management',
        path: '/card-management',
        icon: <CreditCardIcon />,
        list: [
            {
                name: 'Cards View',
                path: `${pathPrefix}/cards-view`,
                icon: <PreviewIcon />,
            },
            {
                name: 'Card Request',
                path: `${pathPrefix}/card-requests`,
                icon: <ReorderIcon />,
            },
        ],
    },
    {
        name: 'Money Management',
        path: '/money-management',
        icon: <AttachMoneyIcon />,
        list: [
            {
                name: 'Withdrawal Request ',
                path: `${pathPrefix}/withdrawal-requests`,
                icon: <LocalAtmIcon />,
            },
            {
                name: 'Deposit Request',
                path: `${pathPrefix}/deposit-requests`,
                icon: <MoneyIcon />,
            },
            {
                name: 'Transfer Request',
                path: `${pathPrefix}/transfer-requests`,
                icon: <TransferWithinAStationIcon />,
            },
        ],
    },
    {
        name: 'User Management',
        path: `${pathPrefix}/users-management`,
        icon: <AdminPanelSettingsIcon />,
        isNotList: true,
    },
    {
        name: 'Settings',
        path: `${pathPrefix}/settings`,
        icon: <SettingsIcon />,
        isNotList: true,
    },
    {
        name: 'Logout',
        path: `${pathPrefix}/logout`,
        icon: <LogoutIcon />,
        isNotList: true,
    },
];

export default links;
