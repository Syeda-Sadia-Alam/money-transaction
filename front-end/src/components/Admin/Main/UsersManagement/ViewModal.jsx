import { Cancel as CancelIcon } from '@mui/icons-material';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Divider,
    // eslint-disable-next-line prettier/prettier
    Typography
} from '@mui/material';
import ListItem from '../Common/ListItem';

export default function OrderDetailView({ open, handleToggle, user }) {
    return (
        <Dialog PaperProps={{ sx: { width: '700px' } }} open={open} onClose={handleToggle}>
            <DialogContent>
                <Typography variant="h6">User Detail</Typography>
                <ListItem name="Name" value={user?.name || 'N/A'} divider />
                <ListItem name="Email" value={user?.email || 'N/A'} divider />
                <ListItem name="Phone Number" value={user?.phone || 'N/A'} divider />
                <ListItem name="Gender" value={user?.gender || 'N/A'} divider />

                <ListItem name="Address" value={user?.address || 'N/A'} divider />
                <ListItem name="Since" value={user?.since || 'N/A'} />
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
