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

export default function OrderDetailView({ open, handleToggle, history }) {
    const { getStatusColor } = useContext(appContext);
    const isCardWithdraw = history?.method === 'transfer' && history.platform !== 'card';
    const isShow = history?.method === 'withdraw' || isCardWithdraw;
    return (
        <Dialog PaperProps={{ sx: { width: '700px' } }} open={open} onClose={handleToggle}>
            <DialogContent>
                <Typography variant="h6">History</Typography>
                <ListItem name="Date" value={history?.date || 'N/A'} divider />
                <ListItem name="Amount" value={history?.amount || 'N/A'} divider />

                {isShow && (
                    <ListItem
                        name={history.platform === 'card' ? 'Card Number' : 'Number'}
                        value={history?.number || 'N/A'}
                        divider
                    />
                )}
                <ListItem name="Platform" value={history?.platform || 'N/A'} divider />
                <ListItem name="Method" value={history?.method || 'N/A'} divider />

                <ListItem
                    name="Status"
                    value={
                        <Typography component="span" color={getStatusColor(history?.status || '')}>
                            {history?.status || 'N/A'}
                        </Typography>
                    }
                    divider
                />
                <ListItem name="Transaction ID" value={history?._id || 'N/A'} />

                <Typography variant="h6">Your Info</Typography>
                <ListItem
                    name="Card Number"
                    value={history?.sender?.card?.number || 'N/A'}
                    divider
                />
                <ListItem name="Name" value={history?.sender?.name || 'N/A'} divider />
                <ListItem name="Email" value={history?.sender?.email || 'N/A'} />
                {history?.method === 'transfer' && history?.platform === 'card' && (
                    <>
                        <Typography variant="h6">Receiver Info</Typography>
                        <ListItem
                            name={history.platform === 'card' ? 'Card Number' : 'Number'}
                            value={history?.receiver?.card?.number || 'N/A'}
                            divider
                        />
                        <ListItem name="Name" value={history?.receiver?.name || 'N/A'} />
                        <ListItem name="Email" value={history?.receiver?.email || 'N/A'} />
                    </>
                )}
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
