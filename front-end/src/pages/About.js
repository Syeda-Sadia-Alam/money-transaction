import { Box, Typography } from '@mui/material';
import common from '../components/Common';

const { Title, Container } = common;

function AboutPage() {
    return (
        <Box py="6rem">
            <Container>
                <Title fTitle="About" lTitle="US" />
                <Box py="2rem">
                    <Typography variant="body1" color="var(--primary)" align="center">
                        When we talk about financial wellness, we're talking about appropriate
                        transition and worry for security and financial well being. It's about
                        knowing where you stand and having a plan to get where you're going. Less
                        about skipping lattes, more about taking small steps that keep you moving in
                        the right direction. Our lives include celebrations and Daily necessary
                        consumption. We want to help you do both.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
export default AboutPage;
