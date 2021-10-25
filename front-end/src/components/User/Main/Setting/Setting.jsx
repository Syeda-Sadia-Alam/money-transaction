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
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    // eslint-disable-next-line prettier/prettier
    TextField, Typography
} from '@mui/material';

const sxStyle = { color: 'action.active', mr: 1, my: 0.5 };

function InputWithIcon({ name, label, value, icon }) {
    return (
        <Box py="0.5rem" sx={{ display: 'flex', alignItems: 'flex-end' }}>
            {icon}
            <TextField
                id="input-with-sx"
                label={label}
                name={name}
                value={value}
                variant="standard"
                fullWidth
            />
        </Box>
    );
}

const GenderFields = () => (
    <Box py="0.5rem">
        <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
        </FormControl>
    </Box>
);

export default function Setting() {
    return (
        <>
            <Box boxShadow={2} p="1rem">
                <Box pb="0.25rem">
                    <Typography variant="h5" color="var(--primary)">
                        Setting
                    </Typography>
                </Box>
                <Divider />
                <InputWithIcon name="name" label="Name" icon={<AccountCircleIcon sx={sxStyle} />} />
                <InputWithIcon name="email" label="Email" icon={<EmailIcon sx={sxStyle} />} />
                <InputWithIcon name="phone" label="Phone" icon={<PhoneIphoneIcon sx={sxStyle} />} />
                <InputWithIcon
                    name="adress"
                    label="Address"
                    icon={<LocationOnIcon sx={sxStyle} />}
                />
                <GenderFields />
                <Box pt="1rem" color="var(--secondary)">
                    <Button variant="outlined" fullWidth color="inherit" startIcon={<UpdateIcon />}>
                        Update
                    </Button>
                </Box>
            </Box>
            <Box height="1rem" />
            <Box boxShadow={2} p="1rem">
                <Box pb="0.25rem">
                    <Typography variant="h5" color="var(--primary)">
                        Change Password
                    </Typography>
                </Box>
                <Divider />
                <InputWithIcon
                    name="old-password"
                    label="Old Password"
                    icon={<LockOpenIcon sx={sxStyle} />}
                />
                <InputWithIcon
                    name="new-password"
                    label="New Password"
                    icon={<LockIcon sx={sxStyle} />}
                />
                <InputWithIcon
                    name="confirm-password"
                    label="Confirm Password"
                    icon={<LockIcon sx={sxStyle} />}
                />

                <Box pt="1rem" color="var(--secondary)">
                    <Button variant="outlined" fullWidth color="inherit" startIcon={<UpdateIcon />}>
                        Update
                    </Button>
                </Box>
            </Box>
        </>
    );
}
