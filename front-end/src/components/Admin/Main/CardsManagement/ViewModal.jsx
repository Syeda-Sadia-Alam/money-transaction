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
import { useContext } from 'react';
import appContext from '../../../../context/contexts/appContext';
import ListItem from '../Common/ListItem';

export default function OrderDetailView({ open, handleToggle, card }) {
    const { getStatusColor } = useContext(appContext);
    return (
        <Dialog PaperProps={{ sx: { width: '700px' } }} open={open} onClose={handleToggle}>
            <DialogContent>
                <Typography variant="h6">Card Detail</Typography>
                <ListItem name="Number" value={card?.number || 'N/A'} divider />
                <ListItem name="Belance" value={card?.belance || 'N/A'} divider />
                <ListItem
                    name="Status"
                    value={
                        <Typography color={getStatusColor(card?.status || '')}>
                            {card?.status || 'N/A'}
                        </Typography>
                    }
                    divider
                />
                <ListItem name="Since" value={card?.since || 'N/A'} />

                <Typography variant="h6">Customer Detail</Typography>
                <ListItem name="Customer Name" value={card?.user?.name || 'N/A'} divider />
                <ListItem name="Email Address" value={card?.user?.email || 'N/A'} divider />
                <ListItem name="Phone No" value={card?.user?.phone || 'N/A'} divider />
                <ListItem name="Gender" value={card?.user?.gender || 'N/A'} divider />
                <ListItem name="Since" value={card?.since || 'N/A'} />
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
