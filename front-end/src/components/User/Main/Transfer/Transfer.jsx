import { Send as SendIcon } from '@mui/icons-material';
import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material';
import { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import appContext from '../../../../context/contexts/appContext';
import SelectPlatform from '../Common/Select';
import History from '../History/History';

export default function Transfer() {
    const history = useHistory();
    const {
        state: { cardDetail },
        userCardTransferRequest,
    } = useContext(appContext);
    const moneyRef = useRef();
    const receiverNumberRef = useRef();
    const [platform, setPlatform] = useState('card');
    const handleChange = (e) => {
        setPlatform(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await userCardTransferRequest(
            moneyRef.current.value,
            receiverNumberRef.current.value,
            platform,
            history
        );
        moneyRef.current.value = '';
        receiverNumberRef.current.value = '';
    };
    const isNotCardMethod = platform === 'bkash' || platform === 'rocket';

    return (
        <>
            <Box component="form" onSubmit={handleSubmit} boxShadow={1} p="0.5rem" mb="1rem">
                <Typography variant="h5" color="var(--primary)" pb="0.25rem">
                    Transfer Money
                </Typography>

                <Divider />
                <Grid container spacing={1} py="0.5rem">
                    <Grid item sx={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Your Card Number"
                            placeholder="Enter your card number"
                            id="fullWidth"
                            value={cardDetail.number || ''}
                            disabled
                        />
                    </Grid>

                    <Grid item sx={12} sm={6}>
                        <SelectPlatform value={platform} handleChange={handleChange} />
                    </Grid>

                    <Grid item sx={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Enter money"
                            id="fullWidth"
                            inputRef={moneyRef}
                        />
                    </Grid>

                    <Grid item sx={12} sm={6}>
                        <TextField
                            fullWidth
                            label={isNotCardMethod ? 'Number' : 'Card Number'}
                            placeholder="Enter a number"
                            id="fullWidth"
                            inputRef={receiverNumberRef}
                        />
                    </Grid>
                </Grid>
                <Button type="submit" variant="outlined" color="secondary" startIcon={<SendIcon />}>
                    Request To Deposit
                </Button>
            </Box>
            <Box boxShadow={1} p="0.5rem">
                <Box pb="0.25rem">
                    <Typography variant="h5" color="var(--primary)">
                        Transaction History
                    </Typography>
                </Box>
                <Divider />
                <Box py="0.5rem" />
                <History query="transfer" />
            </Box>
        </>
    );
}
