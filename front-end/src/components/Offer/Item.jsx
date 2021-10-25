import { Box, Paper, Typography } from '@mui/material';
import * as React from 'react';

export default function Item({ name, description, imageLink }) {
    return (
        <Paper variant="outlined" style={{ borderRadius: '1rem', height: '100%' }}>
            <Box p="0.75rem" textAlign="center">
                <Box display="flex" justifyContent="center">
                    <Box overflow="hidden" width="130px" height="130px">
                        <Box
                            component="img"
                            width="100%"
                            height="100%"
                            src={imageLink}
                            alt={name}
                        />
                    </Box>
                </Box>
                <Typography variant="h6" color="var(--primary)">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description.length > 120 ? description.slice(0, 150) : description}
                </Typography>
            </Box>
        </Paper>
    );
}
