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

export default function History({ query, isDeposit }) {
    const {
        state: { histories },
        fetchHistoriesData,
        getStatusColor,
    } = useContext(appContext);
    const history = useHistory();
    useEffect(async () => {
        await fetchHistoriesData(history, query);
    }, []);

    const [open, setOpen] = useState(false);
    const [selectedHistory, setSelectedHistory] = useState(null);

    const handleToggle = () => setOpen(!open);

    const handleClickSelectHistory = (historyData) => {
        setOpen(true);
        setSelectedHistory(historyData);
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
                        {!isDeposit && (
                            <>
                                <TableCell align="center">
                                    <Typography variant="subtitle1" color="var(--primary)">
                                        Number
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography variant="subtitle1" color="var(--primary)">
                                        Platform
                                    </Typography>
                                </TableCell>
                            </>
                        )}

                        <TableCell align="center">
                            <Typography variant="subtitle1" color="var(--primary)">
                                Status
                            </Typography>
                        </TableCell>

                        <TableCell align="center">
                            <Typography variant="subtitle1" color="var(--primary)">
                                Date
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
                    {histories?.map((historyData) => (
                        <TableRow
                            key={historyData._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {historyData?.sender?.card?.number}
                            </TableCell>
                            <TableCell align="center">{historyData.amount}</TableCell>
                            {!isDeposit && (
                                <>
                                    <TableCell align="center">
                                        {historyData?.number ||
                                            historyData?.receiver?.card?.number ||
                                            'N/A'}
                                    </TableCell>
                                    <TableCell align="center">
                                        {historyData?.platform || 'N/A'}
                                    </TableCell>
                                </>
                            )}

                            <TableCell align="center">
                                <Typography color={getStatusColor(historyData.status)}>
                                    {historyData.status}
                                </Typography>
                            </TableCell>
                            <TableCell align="center">{historyData.date}</TableCell>
                            <TableCell align="center">
                                <Button
                                    onClick={() => handleClickSelectHistory(historyData)}
                                    startIcon={<VisibilityIcon />}
                                    variant="outlined"
                                >
                                    Detail View
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
