import {
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    Twitter as TwitterIcon,
    // eslint-disable-next-line prettier/prettier
  YouTube as YouTubeIcon
} from '@mui/icons-material';
import { Box, Divider, IconButton, Typography } from '@mui/material';

const SocialLinks = () => (
    <Box>
        <Typography color="var(--white)" variant="h5">
            Follow US US
        </Typography>
        <Box py="0.5rem">
            <Divider />
        </Box>
        <Box display="flex" justifyContent="space-between" color="var(--white)">
            <IconButton size="large" color="inherit" href="https://facebook.com" target="_blank">
                <FacebookIcon />
            </IconButton>
            <IconButton size="large" color="inherit" href="https://youtube.com" target="_blank">
                <YouTubeIcon />
            </IconButton>
            <IconButton size="large" color="inherit" href="https://twitter.com" target="_blank">
                <TwitterIcon />
            </IconButton>
            <IconButton size="large" color="inherit" href="https://instagram.com" target="_blank">
                <InstagramIcon />
            </IconButton>
        </Box>
    </Box>
);

export default SocialLinks;
