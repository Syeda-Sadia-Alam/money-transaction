import { Box, TextField } from '@mui/material';

function InputWithIcon({ name, label, value, icon, handleChange, disabled }) {
    return (
        <Box py="0.5rem" sx={{ display: 'flex', alignItems: 'flex-end' }}>
            {icon}
            <TextField
                id={`field-input-${name}`}
                label={label}
                name={name}
                value={value || ''}
                variant="standard"
                onChange={handleChange}
                fullWidth
                disabled={disabled}
            />
        </Box>
    );
}

export default InputWithIcon;
