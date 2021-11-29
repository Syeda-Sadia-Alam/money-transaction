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

export default function RequestsTable() {
    const {
        state: { allHistories },
        fetchAllHistoriesData,
        changeUserRequestHistory,
    } = useContext(appContext);

    const history = useHistory();
    useEffect(async () => {
        await fetchAllHistoriesData(history);
    }, []);

    const [open, setOpen] = useState(false);
    const [selectedHistory, setSelectedHistory] = useState(null);

    const handleToggle = () => setOpen(!open);

    const handleClickSelectHistory = (historyData) => {
        setOpen(true);
        setSelectedHistory(historyData);
    };
    const handleSubmit = async (id, status) => {
        await changeUserRequestHistory(id, status, history);
    };
    return (
        <TableContainer>
            <ViewModal open={open} history={selectedHistory} handleToggle={handleToggle} />
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
                                Amount
                            </Typography>
                        </TableCell>

                        <TableCell align="center">
                            <Typography variant="subtitle1" color="var(--primary)">
                                Method
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="subtitle1" color="var(--primary)">
                                Date
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="subtitle1" color="var(--primary)">
                                Status
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
                    {allHistories?.map((historyData) => (
                        <TableRow
                            key={historyData._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {historyData?.sender?.card?.number}
                            </TableCell>
                            <TableCell align="center">{historyData.amount || 'N/A'}</TableCell>
                            <TableCell align="center">{historyData.method || 'N/A'}</TableCell>
                            <TableCell align="center">{historyData.date || 'N/A'}</TableCell>

                            <TableCell align="center">
                                <Status
                                    status={historyData.status}
                                    id={historyData._id}
                                    handleSubmit={handleSubmit}
                                />
                            </TableCell>
                            <TableCell align="center">
                                <Box>
                                    <Button
                                        onClick={() => handleClickSelectHistory(historyData)}
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
