import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton({ status, id, handleSubmit }) {
    const handleChange = (event) => {
        handleSubmit(id, event.target.value);
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={status.toLowerCase()}
            exclusive
            size="small"
            onChange={handleChange}
        >
            <ToggleButton value="rejected" color="error">
                Rejected
            </ToggleButton>
            <ToggleButton value="pending" color="primary">
                Pending
            </ToggleButton>
            <ToggleButton value="approved" color="success">
                Approved
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
