import { Cancel as CancelIcon, Check as CheckIcon } from '@mui/icons-material';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    // eslint-disable-next-line prettier/prettier
    TextField
} from '@mui/material';
import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import appContext from '../../../../context/contexts/appContext';

const AddUserModal = ({ open, handleToggle }) => {
    const history = useHistory();
    const { userRegistrationHandleSubmit, fetchAllUsers } = useContext(appContext);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        userRegistrationHandleSubmit(
            nameRef.current.value,
            emailRef.current.value,
            passwordRef.current.value,
            confirmPasswordRef.current.value,
            history,
            true
        );
        fetchAllUsers();
        handleToggle();
    };
    return (
        <Dialog
            component="form"
            onSubmit={handleSubmit}
            PaperProps={{ sx: { width: '700px' } }}
            open={open}
            onClose={handleToggle}
        >
            <DialogTitle id="alert-dialog-title">Add New User</DialogTitle>
            <Divider />
            <DialogContent>
                <TextField
                    id="user-name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    inputRef={nameRef}
                />
                <TextField
                    id="user-email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    inputRef={emailRef}
                />

                <TextField
                    id="user-password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    inputRef={passwordRef}
                />
                <TextField
                    id="user-confirm-password"
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    inputRef={confirmPasswordRef}
                />
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button startIcon={<CheckIcon />} variant="outlined" color="success" type="submit">
                    Confirm
                </Button>
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
};
export default AddUserModal;
