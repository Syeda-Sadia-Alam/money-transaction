import {
    AccountBalance as AccountBelanceIcon,
    AttachMoney as AttachMoneyIcon,
    // eslint-disable-next-line prettier/prettier
    Money as MoneyIcon
} from '@mui/icons-material';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useContext } from 'react';
import appContext from '../../../../context/contexts/appContext';

const Item = ({ name, value, icon, isBorderNone }) => {
    const theme = useTheme();

    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box
            width="100%"
            textAlign="center"
            borderRight={isBorderNone ? 'none' : '1px solid var(--neutral)'}
            px="1rem"
            py="1rem"
        >
            <Box fontSize={isSM ? '2rem' : '3rem'} color="var(--secondary)">
                {icon}
            </Box>
            <Typography variant={isSM ? 'subtitle1' : 'h5'} color="text.secondary">
                {name}
            </Typography>
            <Typography variant={isSM ? 'subtitle1' : 'h5'}>{value}</Typography>
        </Box>
    );
};
const iconStyles = { fontSize: 'inherit', color: 'inherit' };

const DashboardSummary = () => {
    const {
        state: { bankDetail },
    } = useContext(appContext);

    return (
        <Box display="flex" justifyContent="space-between">
            <Item
                name="Total Belance"
                value={bankDetail?.totalBelance}
                icon={<AccountBelanceIcon style={iconStyles} />}
            />
            <Item
                name="Total Withdraw"
                value={bankDetail?.totalWithdraw}
                icon={<MoneyIcon style={iconStyles} />}
            />
            <Item
                name="Total Deposit"
                value={bankDetail?.totalDeposit}
                icon={<AttachMoneyIcon style={iconStyles} />}
            />
        </Box>
    );
};
export default DashboardSummary;
