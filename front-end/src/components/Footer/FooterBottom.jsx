import { Box, Typography } from '@mui/material';

const FooterBottom = () => (
    <Box py="0.5rem" textAlign="center">
        <Typography color="var(--white)" variant="h6">
            Design & Developed By{' '}
            <Typography
                variant="h6"
                component="a"
                color="var(--secondary)"
                href="https://github.com/Syeda-Sadia-Alam"
                sx={{ textDecoration: 'none' }}
                target="_blank"
            >
                Syeda Sadia Alam
            </Typography>
            {' & '}
            <Typography
                variant="h6"
                component="a"
                color="var(--secondary)"
                href="https://github.com/Mita787"
                sx={{ textDecoration: 'none' }}
                target="_blank"
            >
                Mita Rani Ghosh
            </Typography>
        </Typography>
    </Box>
);
export default FooterBottom;
