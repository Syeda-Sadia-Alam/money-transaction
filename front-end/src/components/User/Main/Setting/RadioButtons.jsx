import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

const RadioButtons = ({ value, handleChange }) => (
    <Box py="0.5rem">
        <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
                value={value || ''}
                onChange={handleChange}
                row
                aria-label="gender"
                name="gender"
            >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
        </FormControl>
    </Box>
);

export default RadioButtons;
