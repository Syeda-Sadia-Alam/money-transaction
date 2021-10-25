import { Box, Divider, Typography } from '@mui/material';

const About = () => (
    <Box>
        <Typography color="var(--white)" variant="h5">
            About US
        </Typography>
        <Box py="0.5rem">
            <Divider />
        </Box>
        <Typography variant="body1" color="var(--neutral)">
            When we talk about financial wellness, we're talking about appropriate transition and
            worry for security and financial well being. It's about knowing where you stand and
            having a plan to get where you're going. Less about skipping lattes, more about taking
            small steps that keep you moving in the right direction. Our lives include celebrations
            and Daily necessary consumption. We want to help you do both.
        </Typography>
    </Box>
);

export default About;
