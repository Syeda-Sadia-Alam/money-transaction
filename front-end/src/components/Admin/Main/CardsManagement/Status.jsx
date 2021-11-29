import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton({ status, id, handleSubmit }) {
    const handleChange = (event, newAlignment) => {
        handleSubmit(id, newAlignment);
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={status.toLowerCase()}
            exclusive
            size="small"
            onChange={handleChange}
        >
            <ToggleButton value="deactivated" color="error">
                Deactivated
            </ToggleButton>
            <ToggleButton value="activated" color="success">
                Activated
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
