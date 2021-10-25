import {
    AttachMoney as AttachMoneyIcon,
    CreditCard as CreditCardIcon,
    // eslint-disable-next-line prettier/prettier
    Group as GroupIcon
} from '@mui/icons-material';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

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
const items = [
    {
        name: 'Total Users',
        value: '1500',
        icon: <GroupIcon style={iconStyles} />,
    },
    {
        name: 'Belance',
        value: '12500',
        icon: <AttachMoneyIcon style={iconStyles} />,
    },
    {
        name: 'Total Cards',
        value: '11500',
        icon: <CreditCardIcon style={iconStyles} />,
        isBorderNone: true,
    },
];

const DashboardSummary = () => (
    <Box display="flex" justifyContent="space-between">
        {items.map((item) => (
            <Item {...item} key={item.name} />
        ))}
    </Box>
);

export default DashboardSummary;
