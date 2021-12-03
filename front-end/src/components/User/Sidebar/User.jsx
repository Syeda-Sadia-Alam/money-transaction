import { Box, Typography } from '@mui/material';

const User = ({ name, email }) => (
    <Box pt="1rem" textAlign="center">
        <Box m="auto" width="100px">
            <Box component="img" width="100%" height="auto" src="/img/user.svg" />
        </Box>
        <Typography variant="caption" align="center" color="text.secondary">
            User
        </Typography>
        <Typography variant="h5" align="center" color="var(--primary)">
            {name || 'N/A'}
        </Typography>

        <Typography variant="subtitle2" align="center" color="text.secondary">
            {email || 'N/A'}
        </Typography>
    </Box>
);
export default User;
