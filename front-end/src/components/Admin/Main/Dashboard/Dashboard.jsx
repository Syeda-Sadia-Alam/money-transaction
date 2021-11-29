import { Box, Divider, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import appContext from '../../../../context/contexts/appContext';
import ButtonsGroup from './ButtonsGroup';
import DashboardSummary from './DashboardSummary';

export default function Dashboard() {
    const { fetchBankDetail } = useContext(appContext);
    const history = useHistory();
    useEffect(async () => {
        await fetchBankDetail(history);
    }, []);
    return (
        <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between">
            <Typography variant="h3" color="text.secondary">
                Welcome Back!
            </Typography>
            <Divider />
            <DashboardSummary />
            <Divider />
            <ButtonsGroup />
        </Box>
    );
}
