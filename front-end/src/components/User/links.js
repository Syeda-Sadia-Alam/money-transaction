import {
    AccountBalance as AccountBalanceIcon,
    AttachMoney as AttachMoneyIcon,
    CleanHands as CleanHandsIcon,
    CreditCard as CreditCardIcon,
    Dashboard as DashboardIcon,
    Logout as LogoutIcon,
    ManageAccounts as ManageAccountsIcon,
    Money as MoneyIcon,
    // eslint-disable-next-line prettier/prettier
    TransferWithinAStation as TransferWithinAStationIcon
} from '@mui/icons-material';

const iconStyles = { fontSize: 'inherit', color: 'inherit' };
const links = [
    {
        name: 'Dashboard',
        path: '/user/profile?tab=dashboard',
        icon: <DashboardIcon style={iconStyles} />,
    },
    {
        name: 'Account Details',
        path: '/user/profile?tab=account-details',
        icon: <AccountBalanceIcon style={iconStyles} />,
    },
    {
        name: 'Deposit Cash',
        path: '/user/profile?tab=deposit-cash',
        icon: <AttachMoneyIcon style={iconStyles} />,
    },
    {
        name: 'Withdraw Cash',
        path: '/user/profile?tab=withdraw-cash',
        icon: <CleanHandsIcon style={iconStyles} />,
    },
    {
        name: 'Transfer Money',
        path: '/user/profile?tab=transfer-money',
        icon: <TransferWithinAStationIcon style={iconStyles} />,
    },
    {
        name: 'Earn Money',
        path: '/user/profile?tab=earn-money',
        icon: <MoneyIcon style={iconStyles} />,
    },

    {
        name: 'Your Cards',
        path: '/user/profile?tab=cards',
        icon: <CreditCardIcon style={iconStyles} />,
    },

    {
        name: 'Setting',
        path: '/user/profile?tab=setting',
        icon: <ManageAccountsIcon style={iconStyles} />,
    },
    {
        name: 'Logout',
        path: '/user/profile?tab=logout',
        icon: <LogoutIcon style={iconStyles} />,
    },
];
export default links;
