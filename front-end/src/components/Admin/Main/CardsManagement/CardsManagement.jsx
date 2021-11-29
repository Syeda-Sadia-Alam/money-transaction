import { Box, Divider, Typography } from '@mui/material';
import UsersTable from './UsersTable';

const Deposit = () => (
    <Box boxShadow={1} p="0.5rem">
        <Box pb="0.25rem">
            <Typography variant="h5" color="var(--primary)">
                Cards Management
            </Typography>
        </Box>
        <Divider />
        <Box py="0.5rem" />
        <UsersTable />
    </Box>
);
export default Deposit;
