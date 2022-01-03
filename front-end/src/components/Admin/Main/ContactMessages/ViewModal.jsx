import { Cancel as CancelIcon } from '@mui/icons-material';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Divider,
    // eslint-disable-next-line prettier/prettier
    Typography
} from '@mui/material';
import ListItem from '../Common/ListItem';

export default function ViewModal({ open, handleToggle, contact }) {
    return (
        <Dialog PaperProps={{ sx: { width: '700px' } }} open={open} onClose={handleToggle}>
            <DialogContent>
                <Typography variant="h6">Contact Details</Typography>
                <ListItem name="Name" value={contact?.name || 'N/A'} divider />
                <ListItem name="Email" value={contact?.email || 'N/A'} divider />
                <ListItem name="Subject" value={contact?.subject || 'N/A'} />

                <Box py="0.5rem">
                    <Typography variant="h6">Message</Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {contact?.message}
                    </Typography>
                </Box>
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button
                    startIcon={<CancelIcon />}
                    variant="outlined"
                    color="error"
                    onClick={handleToggle}
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}
