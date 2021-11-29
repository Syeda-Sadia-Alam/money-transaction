import { Visibility as VisibilityIcon } from '@mui/icons-material';
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
import Status from './Status';
import ViewModal from './ViewModal';

export default function UsersTable() {
    const {
        state: { cards },
        fetchAllCards,
        changeCardStatusById,
    } = useContext(appContext);
    const history = useHistory();
    useEffect(async () => {
        await fetchAllCards(history);
    }, []);
    useEffect(() => {
        console.log({ cards });
    }, [cards]);
    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleToggle = () => setOpen(!open);

    const handleClickSelectHistory = (historyData) => {
        setOpen(true);
        setSelectedUser(historyData);
    };
    const handleSubmit = async (id, status) => {
        await changeCardStatusById(id, status, history);
    };
    return (
        <TableContainer>
            <ViewModal open={open} card={selectedUser} handleToggle={handleToggle} />
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant="subtitle1" color="var(--primary)">
                                Card Number
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="subtitle1" color="var(--primary)">
                                Belance
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="subtitle1" color="var(--primary)">
                                Status
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
                    {cards?.map((card) => (
                        <TableRow
                            key={card._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {card.number}
                            </TableCell>
                            <TableCell align="center">{card.belance}</TableCell>
                            <TableCell align="center">
                                <Status
                                    status={card.status}
                                    id={card._id}
                                    handleSubmit={handleSubmit}
                                />
                            </TableCell>
                            <TableCell align="center">{card.since}</TableCell>
                            <TableCell align="center">
                                <Box>
                                    <Button
                                        onClick={() => handleClickSelectHistory(card)}
                                        startIcon={<VisibilityIcon />}
                                        variant="outlined"
                                    >
                                        Detail
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
