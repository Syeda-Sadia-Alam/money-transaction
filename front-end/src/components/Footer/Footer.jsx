import { Box, Grid } from '@mui/material';
import Container from '../Common/Container';
import About from './About';
import RelatedLinks from './RelatedLinks';
import SocialLinks from './SocialLinks';

const Footer = () => (
    <Box component="footer" bgcolor="var(--primary)">
        <Container>
            <Box py="2rem">
                <Grid container spacing={5}>
                    <Grid item sm={4}>
                        <About />
                    </Grid>
                    <Grid item sm={4}>
                        <RelatedLinks />
                    </Grid>
                    <Grid item sm={4}>
                        <SocialLinks />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </Box>
);

export default Footer;
