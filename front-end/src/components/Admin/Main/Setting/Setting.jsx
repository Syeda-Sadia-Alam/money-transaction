import {
    Lock as LockIcon,
    LockOpen as LockOpenIcon,
    // eslint-disable-next-line prettier/prettier
    Update as UpdateIcon
} from '@mui/icons-material';
import { Box, Button, Divider, Typography } from '@mui/material';
import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import appContext from '../../../../context/contexts/appContext';
import InputPassword from './InputPassword';

const sxStyle = { color: 'action.active', mr: 1, my: 0.5 };

export default function Setting() {
    const { adminChangePasswordHandleSubmit } = useContext(appContext);
    const history = useHistory();
    const oldPasswordRef = useRef(null);
    const newPasswordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const changePasswordhandleSubmit = async (e) => {
        e.preventDefault();
        await adminChangePasswordHandleSubmit(
            oldPasswordRef.current.value,
            newPasswordRef.current.value,
            confirmPasswordRef.current.value,
            history
        );
        oldPasswordRef.current.value = '';
        newPasswordRef.current.value = '';
        confirmPasswordRef.current.value = '';
    };
    return (
        <Box component="form" onSubmit={changePasswordhandleSubmit} boxShadow={2} p="1rem">
            <Box pb="0.25rem">
                <Typography variant="h5" color="var(--primary)">
                    Change Password
                </Typography>
            </Box>
            <Divider />
            <InputPassword
                name="old-password"
                label="Old Password"
                icon={<LockOpenIcon sx={sxStyle} />}
                inputRef={oldPasswordRef}
            />
            <InputPassword
                name="new-password"
                label="New Password"
                icon={<LockIcon sx={sxStyle} />}
                inputRef={newPasswordRef}
            />
            <InputPassword
                name="confirm-password"
                label="Confirm Password"
                icon={<LockIcon sx={sxStyle} />}
                inputRef={confirmPasswordRef}
            />

            <Box pt="1rem" color="var(--secondary)">
                <Button
                    type="submit"
                    variant="outlined"
                    fullWidth
                    color="inherit"
                    startIcon={<UpdateIcon />}
                >
                    Update
                </Button>
            </Box>
        </Box>
    );
}
