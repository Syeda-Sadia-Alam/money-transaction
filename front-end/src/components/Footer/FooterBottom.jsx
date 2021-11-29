import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const FooterBottom = () => {
    const theme = useTheme();
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box
            py="0.5rem"
            display={isMD ? 'block' : 'flex'}
            justifyContent="space-between"
            borderTop="1px solid var(--neutral)"
            alignItems="center"
            textAlign="center"
        >
            <Typography color="var(--white)" variant="h6">
                Designed By{' '}
                <Typography
                    variant="h6"
                    component="a"
                    color="var(--secondary)"
                    href="github_url"
                    sx={{ textDecoration: 'none' }}
                    target="_blank"
                >
                    Designer Name
                </Typography>
            </Typography>
            <Typography color="var(--white)" variant="h6">
                Developed By{' '}
                <Typography
                    variant="h6"
                    component="a"
                    color="var(--secondary)"
                    href="github_url"
                    sx={{ textDecoration: 'none' }}
                    target="_blank"
                >
                    Developer Name
                </Typography>
            </Typography>
        </Box>
    );
};
export default FooterBottom;
