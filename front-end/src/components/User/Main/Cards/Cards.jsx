import { Box, Divider, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import Card from './Card';
import CardViewDialog from './CardViewDialog';
import OrderCard from './OrderCard';

const Cards = () => {
    const [isViewOpen, setViewOpen] = useState(false);
    const handleViewToggleClick = () => {
        setViewOpen(!isViewOpen);
    };
    return (
        <>
            <Box boxShadow={1} p="0.5rem">
                <Box pb="0.25rem">
                    <Typography variant="h5" color="var(--primary)">
                        Order Cards
                    </Typography>
                </Box>
                <Divider />
                <Box py="0.5rem">
                    <OrderCard />
                </Box>
            </Box>
            <Box height="1rem" />
            <Box boxShadow={1} p="0.5rem">
                <Box pb="0.25rem">
                    <Typography variant="h5" color="var(--primary)">
                        Current Cards (02)
                    </Typography>
                </Box>
                <Divider />
                <Box py="0.5rem">
                    <Grid container spacing={2}>
                        <Card handleClick={handleViewToggleClick} />
                        <Card handleClick={handleViewToggleClick} />
                        <Card handleClick={handleViewToggleClick} />
                    </Grid>
                </Box>
            </Box>
            <CardViewDialog open={isViewOpen} handleClose={handleViewToggleClick} />
        </>
    );
};

export default Cards;
