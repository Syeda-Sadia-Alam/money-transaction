import { Box, TextField } from '@mui/material';

function InputPassword({ name, label, icon, disabled, inputRef }) {
    return (
        <Box py="0.5rem" sx={{ display: 'flex', alignItems: 'flex-end' }}>
            {icon}
            <TextField
                id={`password-input-${name}`}
                label={label}
                name={name}
                variant="standard"
                fullWidth
                disabled={disabled}
                inputRef={inputRef}
            />
        </Box>
    );
}

export default InputPassword;
