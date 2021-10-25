import { Box, Divider, Typography, useMediaQuery, useTheme } from '@mui/material';
import ButtonGroup from '../../components/Admin/Dashboard/ButtonsGroup';
import DashboardSummary from '../../components/Admin/Dashboard/DashboardSummary';

const Dashboard = () => {
    const theme = useTheme();
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box>
            <Box py="0.5rem">
                <Typography variant={isSM ? 'h4' : 'h2'} color="text.secondary">
                    Welcome To Dashboard
                </Typography>
            </Box>

            <Divider />
            <DashboardSummary />
            <Divider />
            <Box pt="1rem">
                <ButtonGroup />
            </Box>
        </Box>
    );
};
export default Dashboard;
