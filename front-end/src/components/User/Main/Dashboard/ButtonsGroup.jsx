import { Box, CardActionArea, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useHistory } from 'react-router-dom';
import links from '../../links';

const CardButtonItem = ({ name, icon, path }) => {
    const theme = useTheme();
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const history = useHistory();
    return (
        <Grid item xs={6} md={4}>
            <Box boxShadow={1} borderRadius="1rem" overflow="hidden">
                <CardActionArea onClick={() => history.push(path)}>
                    <Box textAlign="center" py="1rem">
                        <Box fontSize="3rem" color="var(--primary)">
                            {icon}
                        </Box>
                        <Typography variant={isSM ? 'subtitle1' : 'h6'} color="text.secondary">
                            {name}
                        </Typography>
                    </Box>
                </CardActionArea>
            </Box>
        </Grid>
    );
};

export default function ButtonsGroup() {
    return (
        <Box mt="1rem">
            <Grid container spacing={2}>
                {links.slice(1).map((item) => (
                    <CardButtonItem {...item} key={item.name} />
                ))}
            </Grid>
        </Box>
    );
}
