import { Box, Typography } from '@mui/material';

const User = ({ name }) => (
    <Box pt="1rem">
        <Box m="auto" width="100px">
            <Box component="img" width="100%" height="auto" src="/img/user.svg" />
        </Box>
        <Typography variant="h5" align="center" color="var(--primary)">
            {name || 'N/A'}
        </Typography>
    </Box>
);
export default User;
