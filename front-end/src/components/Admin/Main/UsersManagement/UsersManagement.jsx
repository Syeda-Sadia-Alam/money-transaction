import { Add as AddIcon } from '@mui/icons-material';
import { Box, Button, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import AddUserModal from './AddUserModal';
import UsersTable from './UsersTable';

const Deposit = () => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <Box boxShadow={1} p="0.5rem">
            <Box
                pb="0.5rem"
                color="var(--primary)"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h5" color="var(--primary)">
                    Users Management
                </Typography>
                <Button
                    variant="outlined"
                    onClick={handleToggle}
                    color="inherit"
                    startIcon={<AddIcon />}
                >
                    Add New User
                </Button>
            </Box>
            <Divider />
            <Box py="0.5rem" />
            <AddUserModal open={open} handleToggle={handleToggle} />
            <UsersTable query="deposit" />
        </Box>
    );
};
export default Deposit;
