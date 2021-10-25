import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

function Item({ title, value, icon, isNoneBorder }) {
    const theme = useTheme();
    const isSM = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Box
                textAlign="center"
                width="100%"
                borderRight={isNoneBorder || !isSM ? 'none' : '1px solid var(--neutral)'}
                borderBottom={isNoneBorder || isSM ? 'none' : '1px solid var(--neutral)'}
                my="1rem"
                py="1rem"
            >
                <Box fontSize="3.5rem" color="var(--neutral)">
                    {icon}
                </Box>
                <Typography variant="h6" color="var(--primary)">
                    {title}
                </Typography>
                <Typography variant="h6" color="var(--primary-deep)">
                    {value}
                </Typography>
            </Box>
        </Grid>
    );
}
export default Item;
