import { Send as SendIcon } from '@mui/icons-material';
import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material';
import { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import appContext from '../../../../context/contexts/appContext';
import SelectPlatform from '../Common/Select';

export default function FullWidthTextField() {
    const {
        state: { cardDetail },
        userCardWithdrawRequest,
    } = useContext(appContext);

    const amountRef = useRef(null);
    const numberRef = useRef(null);
    const history = useHistory();
    const [platform, setPlatform] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await userCardWithdrawRequest(
            amountRef.current.value,
            numberRef?.current?.value || null,
            platform,
            history
        );
        amountRef.current.value = '';
        numberRef.current.value = '';
    };

    const handleChange = (e) => {
        setPlatform(e.target.value);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} boxShadow={1} p="0.5rem">
            <Typography variant="h5" color="var(--primary)" pb="0.25rem">
                Withdraw
            </Typography>

            <Divider />
            <Grid container spacing={1} py="0.5rem">
                <Grid item sx={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Your Card Number"
                        placeholder="Enter a card number"
                        id="fullWidth"
                        value={cardDetail?.number || ''}
                        disabled
                    />
                </Grid>
                <Grid item sx={12} sm={6}>
                    <SelectPlatform value={platform} handleChange={handleChange} isNoneCard />
                </Grid>
                <Grid item sx={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Enter money"
                        inputRef={amountRef}
                        placeholder="Money"
                        id="fullWidth"
                    />
                </Grid>
                {platform !== '' && (
                    <Grid item sx={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Number"
                            placeholder="Enter a number"
                            id="fullWidth"
                            inputRef={numberRef}
                        />
                    </Grid>
                )}
            </Grid>
            <Button type="submit" variant="outlined" color="secondary" startIcon={<SendIcon />}>
                Withdraw Request
            </Button>
        </Box>
    );
}
