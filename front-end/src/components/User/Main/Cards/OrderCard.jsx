// import { AddBoxOutlined } from '@mui/icons-material';
import { Box, CardActionArea, Typography } from '@mui/material';
import { useState } from 'react';
import OrderDialog from './OrderDialog';

const Cards = () => {
    const [open, setOpen] = useState(false);
    const handleToggleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <Box border="2px dashed var(--primary)">
                <CardActionArea onClick={handleToggleClick}>
                    <Box display="flex" p="1rem">
                        <Box
                            display="flex"
                            maxWidth="80px"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box component="img" src="/img/card.png" width="100%" height="auto" />
                        </Box>
                        <Box pl="1rem">
                            <Typography variant="h6" color="var(--primary)">
                                Order a card
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                You can order one card per supported currency
                            </Typography>
                        </Box>
                    </Box>
                </CardActionArea>
            </Box>
            <OrderDialog open={open} handleClose={handleToggleClick} />
        </>
    );
};

export default Cards;
