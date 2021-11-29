import { Box, Divider, Typography } from '@mui/material';
import RequestsTable from './RequestsTable';

const Deposit = () => (
    <Box boxShadow={1} p="0.5rem">
        <Box pb="0.25rem">
            <Typography variant="h5" color="var(--primary)">
                Requests Management
            </Typography>
        </Box>
        <Divider />
        <Box py="0.5rem" />
        <RequestsTable />
    </Box>
);
export default Deposit;
