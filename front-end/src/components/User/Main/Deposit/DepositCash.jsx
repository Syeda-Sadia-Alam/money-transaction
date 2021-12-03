import { Send as SendIcon } from '@mui/icons-material';
import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material';
import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import appContext from '../../../../context/contexts/appContext';

export default function FullWidthTextField() {
    const {
        state: {
            cardDetail: { number },
        },
        userCardDepositRequest,
    } = useContext(appContext);
    const history = useHistory();
    const amountRef = useRef(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        await userCardDepositRequest(amountRef.current.value, history);
        amountRef.current.value = '';
    };
    return (
        <Box component="form" onSubmit={handleSubmit} boxShadow={1} p="0.5rem">
            <Typography variant="h5" color="var(--primary)" pb="0.25rem">
                Deposit Cash
            </Typography>

            <Divider />
            <Grid container spacing={1} py="0.5rem">
                <Grid item sx={12} sm={6}>
                    <TextField inputRef={amountRef} fullWidth label="Enter Money" id="fullWidth" />
                </Grid>
                <Grid item sx={12} sm={6}>
                    <TextField
                        value={number || 'XXXX-XXXX-XXXX-XXXX'}
                        fullWidth
                        label="Card Number"
                        id="fullWidth"
                        disabled
                    />
                </Grid>
            </Grid>
            <Button type="submit" variant="outlined" color="secondary" startIcon={<SendIcon />}>
                Request To Deposit
            </Button>
        </Box>
    );
}
