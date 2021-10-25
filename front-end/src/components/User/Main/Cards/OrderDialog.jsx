import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    // eslint-disable-next-line prettier/prettier
    TextField
} from '@mui/material';
import ListItem from '../Common/ListItem';

export default function OrderDialog({ open, handleClose }) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Card Order Confirmation</DialogTitle>
            <Divider />
            <DialogContent>
                <DialogContentText>
                    <ListItem name="Card Name" value="Muhammad Minhaj" divider />
                    <ListItem name="Currency Type" value="USD" divider />
                    <ListItem name="Exp" value="22/22" divider />
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="customer-id"
                    label="Customer Id"
                    type="text"
                    fullWidth
                    variant="standard"
                    helperText="Please enter the customer ID to confirm the card order"
                />
            </DialogContent>
            <Divider />

            <DialogActions>
                <Button onClick={handleClose} color="error">
                    Cancel
                </Button>
                <Button onClick={handleClose} variant="outlined" color="secondary">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}
