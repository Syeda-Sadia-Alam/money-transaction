import { Edit as EditIcon } from '@mui/icons-material';
import { Box, Button, Divider, ListItem, Typography } from '@mui/material';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import appContext from '../../../../context/contexts/appContext';

const Item = ({ name, value, divider }) => (
    <ListItem divider={divider}>
        <Box width="100%" display="flex" justifyContent="space-between">
            <Typography variant="subtitle1" color="text.secondary">
                {name}
            </Typography>
            <Typography>{value}</Typography>
        </Box>
    </ListItem>
);

export default function AccountDetails() {
    const {
        state: {
            userDetail: { name, gender, address, since, cardNumber, phone },
        },
    } = useContext(appContext);
    const history = useHistory();
    return (
        <Box boxShadow={2} p="1rem">
            <Box pb="0.25rem">
                <Typography variant="h5" color="var(--primary)">
                    Account Details
                </Typography>
            </Box>
            <Divider />
            <Item name="Customer Name" value={name || 'N/A'} divider />
            <Item name="Gender" value={gender || 'N/A'} divider />
            <Item name="Phone" value={phone || 'N/A'} divider />
            <Item name="Address" value={address || 'N/A'} divider />
            <Item name="Card Number" value={cardNumber || '1234-XXXX-XXXX-XXXX'} divider />
            <Item name="Account Since" value={since || 'N/A'} />
            <Box color="var(--primary)">
                <Button
                    onClick={() => history.push('/user/profile?tab=setting')}
                    startIcon={<EditIcon />}
                    color="inherit"
                    variant="outlined"
                    fullWidth
                >
                    Edit Profile To Update
                </Button>
            </Box>
        </Box>
    );
}
