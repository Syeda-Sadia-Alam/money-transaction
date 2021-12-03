import { Box, List, ListItem, Typography } from '@mui/material';
import { useContext } from 'react';
import appContext from '../../../../context/contexts/appContext';
import Item from '../Common/ListItem';

export default function AccountSummery() {
    const {
        state: {
            cardDetail: { belance, number, currencyType },
        },
    } = useContext(appContext);
    return (
        <Box boxShadow={1}>
            <List dense>
                <ListItem divider>
                    <Typography variant="subtitle1" color="var(--secondary)">
                        Current Account Summary
                    </Typography>
                </ListItem>

                <Item name="Account No" value={number || 'N/A'} divider />
                <Item name="Amount" value={belance ? `${belance}$` : '00$'} divider />
                <Item name="Currency Type" value={currencyType || 'N/A'} />
            </List>
        </Box>
    );
}
