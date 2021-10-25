import { Box, Divider, Typography } from '@mui/material';
import HistoryTable from './HistoryTable';

export default function FullWidthTextField() {
    return (
        <Box boxShadow={1} p="0.5rem">
            <Box pb="0.25rem">
                <Typography variant="h5" color="var(--primary)">
                    Deposit History
                </Typography>
            </Box>
            <Divider />
            <Box py="0.5rem" />
            <HistoryTable />
        </Box>
    );
}
