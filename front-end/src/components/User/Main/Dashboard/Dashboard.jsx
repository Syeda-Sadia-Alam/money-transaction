import { Box } from '@mui/material';
import AccountSummary from './AccountSummary';
import ButtonsGroup from './ButtonsGroup';

export default function Dashboard() {
    return (
        <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between">
            <AccountSummary />
            <ButtonsGroup />
        </Box>
    );
}
