import { Box } from '@mui/material';
import DipositCash from './DepositCash';
import DipositHistory from './WithdrawHistory';

const Cards = () => (
    <>
        <DipositCash />

        <Box height="1rem" />
        <DipositHistory />
    </>
);

export default Cards;
