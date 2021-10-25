import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    // eslint-disable-next-line prettier/prettier
    Divider, Typography
} from '@mui/material';
import ListItem from '../Common/ListItem';

export default function CardViewDialog({ open, handleClose }) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>View Card Details</DialogTitle>
            <Divider />
            <DialogContent>
                <Box width="500px" textAlign="center">
                    <Box
                        display="flex"
                        maxWidth="80px"
                        justifyContent="center"
                        alignItems="center"
                        m="auto"
                        pb="1rem"
                    >
                        <Box component="img" src="/img/card-3.png" width="100%" height="auto" />
                    </Box>
                    <Typography variant="h6" color="text.secondary">
                        1234567XXXXX
                    </Typography>
                    <Typography variant="h6" color="var(--primary)">
                        Muhammad Minhaj
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Blocked
                    </Typography>

                    <Box pl="0.5rem">
                        <ListItem name="Belance" value="$20" divider />
                        <ListItem name="Currency Type" value="USD" divider />
                        <ListItem name="Since" value="02-02-2020" divider />
                        <ListItem name="Exp" value="02-02-2021" divider />
                        <ListItem name="Status" value="Running" />
                    </Box>
                </Box>
            </DialogContent>
            <Divider />

            <DialogActions>
                <Button onClick={handleClose} color="error">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}
