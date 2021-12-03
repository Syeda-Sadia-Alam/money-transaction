import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';

export default function BasicSelect({ value, handleChange, isNoneCard }) {
    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel id="money-platform-select">Select Platform</InputLabel>
                <Select
                    labelId="money-platform-select"
                    id="demo-simple-select"
                    value={value}
                    label="Select Platform"
                    onChange={handleChange}
                >
                    <MenuItem value="bkash">Bkash</MenuItem>
                    <MenuItem value="rocket">Rocket</MenuItem>
                    {!isNoneCard && <MenuItem value="card">Card</MenuItem>}
                </Select>
            </FormControl>
        </Box>
    );
}
