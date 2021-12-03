import {
    AccountCircle as AccountCircleIcon,
    Email as EmailIcon,
    LocationOn as LocationOnIcon,
    Lock as LockIcon,
    LockOpen as LockOpenIcon,
    PhoneIphone as PhoneIphoneIcon,
    // eslint-disable-next-line prettier/prettier
    Update as UpdateIcon
} from '@mui/icons-material';
import { Box, Button, Divider, Typography } from '@mui/material';
import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import appContext from '../../../../context/contexts/appContext';
import InputPassword from './InputPassword';
import InputWithIcon from './InputWithIcon';
import RadioButtons from './RadioButtons';

const sxStyle = { color: 'action.active', mr: 1, my: 0.5 };

export default function Setting() {
    const {
        state: {
            userDetail: { name, email, address, gender, phone },
        },
        userProfileUpdateHandleChange,
        userProfileUpdateHandleSubmit,
        userPasswordChangeHandleSubmit,
    } = useContext(appContext);
    const history = useHistory();
    const oldPasswordRef = useRef(null);
    const newPasswordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await userProfileUpdateHandleSubmit(history);
    };
    const changePasswordhandleSubmit = async (e) => {
        e.preventDefault();
        await userPasswordChangeHandleSubmit(
            oldPasswordRef.current.value,
            newPasswordRef.current.value,
            confirmPasswordRef.current.value,
            history
        );
    };
    return (
        <>
            <Box component="form" onSubmit={handleSubmit} boxShadow={2} p="1rem">
                <Box pb="0.25rem">
                    <Typography variant="h5" color="var(--primary)">
                        Setting
                    </Typography>
                </Box>
                <Divider />
                <InputWithIcon
                    name="name"
                    value={name}
                    label="Name"
                    icon={<AccountCircleIcon sx={sxStyle} />}
                    handleChange={userProfileUpdateHandleChange}
                />
                <InputWithIcon
                    name="email"
                    value={email}
                    label="Email"
                    icon={<EmailIcon sx={sxStyle} />}
                    disabled
                />
                <InputWithIcon
                    name="phone"
                    value={phone}
                    label="Phone"
                    icon={<PhoneIphoneIcon sx={sxStyle} />}
                    handleChange={userProfileUpdateHandleChange}
                />
                <InputWithIcon
                    name="address"
                    label="Address"
                    value={address}
                    icon={<LocationOnIcon sx={sxStyle} />}
                    handleChange={userProfileUpdateHandleChange}
                />
                <RadioButtons value={gender} handleChange={userProfileUpdateHandleChange} />
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
            <Box height="1rem" />
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
        </>
    );
}
