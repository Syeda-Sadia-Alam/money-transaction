// import { AddBoxOutlined } from '@mui/icons-material';
import { Box, CardActionArea, Divider, Grid, Typography } from '@mui/material';

const Card = ({ handleClick }) => (
    <Grid item xs={12} md={6}>
        <Box boxShadow={1} borderRadius="0.25rem">
            <CardActionArea onClick={handleClick}>
                <Box display="flex" p="1rem">
                    <Box display="flex" maxWidth="80px" justifyContent="center" alignItems="center">
                        <Box component="img" src="/img/card-3.png" width="100%" height="auto" />
                    </Box>
                    <Box pl="0.5rem">
                        <Typography variant="h6" color="var(--primary)">
                            Muhammad Minhaj
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            1234567XXXXX
                        </Typography>
                    </Box>
                </Box>
                <Divider />
                <Box pl="0.5rem">
                    <Typography variant="h6" color="text.secondary">
                        Blocked
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        02-0325-430
                    </Typography>
                </Box>
            </CardActionArea>
        </Box>
    </Grid>
);

export default Card;
