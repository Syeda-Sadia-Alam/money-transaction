import { Visibility as VisibilityIcon } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import appContext from '../../../../context/contexts/appContext';
import ViewModal from './ViewModal';

export default function ContactTable() {
    const {
        state: { contacts },
        fetchAllContactMessages,
    } = useContext(appContext);
    const history = useHistory();
    useEffect(async () => {
        await fetchAllContactMessages(history);
    }, []);

    const [open, setOpen] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);

    const handleToggle = () => setOpen(!open);

    const handleClickSelectHistory = (historyData) => {
        setOpen(true);
        setSelectedContact(historyData);
    };

    return (
        <TableContainer>
            <ViewModal open={open} contact={selectedContact} handleToggle={handleToggle} />

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
                                Subject
                            </Typography>
                        </TableCell>

                        <TableCell align="center">
                            <Typography variant="subtitle1" color="var(--primary)">
                                View Details
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contacts?.map((contact) => (
                        <TableRow
                            key={contact._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {contact?.name || 'N/A'}
                            </TableCell>
                            <TableCell align="center">{contact?.email || 'N/A'}</TableCell>
                            <TableCell align="center">{contact?.subject || 'N/A'}</TableCell>
                            <TableCell align="center">
                                <Button
                                    onClick={() => handleClickSelectHistory(contact)}
                                    startIcon={<VisibilityIcon />}
                                    variant="outlined"
                                >
                                    Detail
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
