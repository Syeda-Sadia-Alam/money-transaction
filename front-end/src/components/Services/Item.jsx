import { Box, Paper, Typography } from '@mui/material';

export default function Item({ name, description, icon }) {
    return (
        <Paper style={{ height: '100%' }}>
            <Box p="0.75rem" textAlign="center">
                <Box textAlign="center" color="var(--secondary)">
                    {icon}
                </Box>
                <Typography variant="h6" color="var(--primary)">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </Box>
        </Paper>
    );
}
