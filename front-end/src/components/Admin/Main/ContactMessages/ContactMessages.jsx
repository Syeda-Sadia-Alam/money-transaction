import { Box, Divider, Typography } from '@mui/material';
import ContactTable from './ContactTable';

const ContactMessages = () => (
    <Box boxShadow={1} p="0.5rem">
        <Box
            pb="0.5rem"
            color="var(--primary)"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            <Typography variant="h5" color="var(--primary)">
                Contact Messages
            </Typography>
        </Box>
        <Divider />
        <Box py="0.5rem" />

        <ContactTable />
    </Box>
);
export default ContactMessages;
