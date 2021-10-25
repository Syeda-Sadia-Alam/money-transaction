import { Box } from '@mui/material';
import DipositCash from './DepositCash';
import DipositHistory from './DepositHistory';

const Cards = () => (
    <>
        <DipositCash />

        <Box height="1rem" />
        <DipositHistory />
    </>
);

export default Cards;
