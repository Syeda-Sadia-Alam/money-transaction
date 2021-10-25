import { Box, Button, Grid, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import common from '../Common';

const { Container } = common;
function Slider() {
    const history = useHistory();
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sm={6}>
                    <Box height="100%" display="flex" alignItems="center" justifyContent="center">
                        <Box>
                            <Typography variant="h4" color="var(--black)">
                                Helps you grow your money
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                Take control all in one, deposit, transfer, withdraw, checking and
                                more
                            </Typography>
                            <Box color="var(--secondary)" py="1.5rem">
                                <Button
                                    variant="outlined"
                                    color="inherit"
                                    size="large"
                                    onClick={() => history.push('/user/signup')}
                                >
                                    Get Started
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item sm={6}>
                    <Box>
                        <Box component="img" src="/img/Dashboard.svg" width="100%" height="auto" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Slider;
