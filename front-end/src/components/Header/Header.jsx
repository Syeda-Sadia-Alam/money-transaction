import { Menu as MenuIcon } from '@mui/icons-material';
import { Box, Grow, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import common from '../Common';
import Brand from './Brand';
import Navbar from './Navbar';

const { Container } = common;
function Header() {
    const theme = useTheme();
    const isSM = useMediaQuery(theme.breakpoints.down('md'));
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <Box minHeight="60px">
            <Box component="header" position="fixed" top="0" width="100%" zIndex="999">
                <Box bgcolor="var(--primary)">
                    <Container>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Brand />
                            {isSM ? (
                                <Box color="var(--white)">
                                    <IconButton color="inherit" onClick={handleToggle}>
                                        <MenuIcon />
                                    </IconButton>
                                </Box>
                            ) : (
                                <Navbar />
                            )}
                        </Box>
                    </Container>
                </Box>
                <Grow direction="down" in={open} mountOnEnter unmountOnExit>
                    <Box bgcolor="var(--primary-deep)">
                        <Navbar />
                    </Box>
                </Grow>
            </Box>
        </Box>
    );
}
export default Header;
