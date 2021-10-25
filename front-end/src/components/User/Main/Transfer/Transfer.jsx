import { Box } from '@mui/material';
import TransactionHistory from './TransactionHistory';
import TransferMoney from './TransferMoney';

const Cards = () => (
    <>
        <TransferMoney />

        <Box height="1rem" />
        <TransactionHistory />
    </>
);

export default Cards;
