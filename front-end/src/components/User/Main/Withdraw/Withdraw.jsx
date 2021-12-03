import { Box, Divider, Typography } from '@mui/material';
import History from '../History/History';
import WithdrawCash from './WithdrawCash';

const Cards = () => (
    <>
        <WithdrawCash />

        <Box height="1rem" />
        <Box boxShadow={1} p="0.5rem">
            <Box pb="0.25rem">
                <Typography variant="h5" color="var(--primary)">
                    History
                </Typography>
            </Box>
            <Divider />
            <Box py="0.5rem" />
            <History query="withdraw" />
        </Box>
    </>
);

export default Cards;
