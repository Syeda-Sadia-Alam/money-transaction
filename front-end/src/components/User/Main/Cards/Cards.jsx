import { Box, Divider, Typography } from '@mui/material';
import { useContext } from 'react';
import appContext from '../../../../context/contexts/appContext';
import ListItem from '../Common/ListItem';

const Cards = () => {
    const {
        state: {
            cardDetail: { belance, number, currencyType, status, since },
            userDetail: { name },
        },
    } = useContext(appContext);

    return (
        <Box boxShadow={1} p="0.5rem">
            <Typography pb="0.5rem" variant="h5" color="var(--primary)">
                Your Card Info
            </Typography>

            <Divider />
            <Box py="0.5rem" textAlign="center">
                <Box
                    display="flex"
                    maxWidth="80px"
                    justifyContent="center"
                    alignItems="center"
                    m="auto"
                    pb="1rem"
                >
                    <Box component="img" src="/img/card-3.png" width="100%" height="auto" />
                </Box>
                <Typography variant="h6" color="text.secondary">
                    {number || '1234567XXXXX'}
                </Typography>
                <Typography variant="h6" color="var(--primary)">
                    {name || 'N/A'}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {status || 'N/A'}
                </Typography>

                <Box pl="0.5rem">
                    <ListItem name="Belance" value={belance ? `${belance}$` : '00$'} divider />
                    <ListItem name="Number" value={number || '1234-XXXX-XXXX-XXXX'} divider />
                    <ListItem name="Currency Type" value={currencyType || 'N/A'} divider />
                    <ListItem name="Since" value={since || 'N/A'} divider />
                    <ListItem name="Status" value={status || 'N/A'} />
                </Box>
            </Box>
        </Box>
    );
};
export default Cards;
