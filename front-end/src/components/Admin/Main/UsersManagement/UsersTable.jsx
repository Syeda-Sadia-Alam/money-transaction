import { Delete as DeleteIcon, Visibility as VisibilityIcon } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import appContext from '../../../../context/contexts/appContext';
import ConrimAlert from '../../../Common/ConfirmAlert';
import ViewModal from './ViewModal';

export default function UsersTable() {
    const {
        state: { users },
        fetchAllUsers,
        userDeleteById,
    } = useContext(appContext);
    const history = useHistory();
    useEffect(async () => {
        await fetchAllUsers(history);
    }, []);
    const [isConfirmDelete, setConfirmDelete] = useState(false);
    const [confirmDeleteId, setConfirmDeleteId] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleToggle = () => setOpen(!open);

    const handleClickSelectHistory = (historyData) => {
        setOpen(true);
        setSelectedUser(historyData);
    };
    const handleClickDelete = (id) => {
        setConfirmDeleteId(id);
        setConfirmDelete(true);
    };
    const handleCloseDelete = () => {
        setConfirmDelete(false);
    };
    const handleSubmitDelete = async () => {
        setConfirmDelete(false);
        await userDeleteById(confirmDeleteId, history);
    };
    return (
        <TableContainer>
            <ViewModal open={open} user={selectedUser} handleToggle={handleToggle} />
            <ConrimAlert
                open={isConfirmDelete}
                msg="delete"
                handleSubmit={handleSubmitDelete}
                handleClose={handleCloseDelete}
            />
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant="subtitle1" color="var(--primary)">
                                Name
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="subtitle1" color="var(--primary)">
                                Email
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="subtitle1" color="var(--primary)">
                                Gender
                            </Typography>
                        </TableCell>

                        <TableCell align="center">
                            <Typography variant="subtitle1" color="var(--primary)">
                                Since
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="subtitle1" color="var(--primary)">
                                Actions
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users?.map((user) => (
                        <TableRow
                            key={user._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {user?.name || 'N/A'}
                            </TableCell>
                            <TableCell align="center">{user?.email || 'N/A'}</TableCell>
                            <TableCell align="center">{user?.gender || 'N/A'}</TableCell>
                            <TableCell align="center">{user?.since || 'N/A'}</TableCell>
                            <TableCell align="center">
                                <Box display="flex" justifyContent="center">
                                    <Button
                                        onClick={() => handleClickSelectHistory(user)}
                                        startIcon={<VisibilityIcon />}
                                        variant="outlined"
                                    >
                                        Detail
                                    </Button>
                                    <Box width="1rem" />
                                    <Button
                                        onClick={() => handleClickDelete(user._id)}
                                        startIcon={<DeleteIcon />}
                                        variant="outlined"
                                        color="error"
                                    >
                                        Delete
                                    </Button>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
