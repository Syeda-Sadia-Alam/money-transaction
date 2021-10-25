import { Send as SendIcon } from '@mui/icons-material';
import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material';

export default function FullWidthTextField() {
    return (
        <Box boxShadow={1} p="0.5rem">
            <Typography variant="h5" color="var(--primary)" pb="0.25rem">
                Deposit Cash
            </Typography>

            <Divider />
            <Grid container spacing={1} py="0.5rem">
                <Grid item sx={12} sm={6}>
                    <TextField fullWidth label="Enter Money" id="fullWidth" />
                </Grid>
                <Grid item sx={12} sm={6}>
                    <TextField fullWidth label="Card Number" id="fullWidth" />
                </Grid>
            </Grid>
            <Button variant="outlined" color="secondary" startIcon={<SendIcon />}>
                Request To Deposit
            </Button>
        </Box>
    );
}
