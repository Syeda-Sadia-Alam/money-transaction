import { Box, List, ListItem, Typography } from '@mui/material';
import Item from '../Common/ListItem';

export default function AccountSummery() {
    return (
        <Box boxShadow={1}>
            <List dense>
                <ListItem divider>
                    <Typography variant="subtitle1" color="var(--secondary)">
                        Current Account Summary
                    </Typography>
                </ListItem>

                <Item name="Account No" value="123456789" divider />
                <Item name="Amount" value="436$" />
            </List>
        </Box>
    );
}
