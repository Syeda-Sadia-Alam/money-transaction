import { Login as LoginIcon } from '@mui/icons-material';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import common from '../../components/Common';

const { Container } = common;
const Login = () => (
    <Container>
        <Box py="4rem">
            <Grid container spacing={2}>
                <Grid item md={5}>
                    <Box>
                        <Box
                            component="img"
                            src="/img/Mobile-login.jpg"
                            width="100%"
                            height="auto"
                        />
                    </Box>
                </Grid>
                <Grid item md={7}>
                    <Box height="100%" flexDirection="row" display="flex" alignItems="center">
                        <Paper elevation={3} style={{ width: '100%' }}>
                            <Box pt="1rem" px="1rem">
                                <Typography variant="h4" color="var(--primary)">
                                    Login
                                </Typography>
                            </Box>
                            <Box p="1rem">
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="dense"
                                />

                                <TextField
                                    id="outlined-basic"
                                    label="Subject"
                                    variant="outlined"
                                    fullWidth
                                    margin="dense"
                                />

                                <Box pt="1rem" maxWidth="300px" color="var(--secondary)">
                                    <Box display="flex" pb="0.25rem">
                                        <Typography variant="subtitle2" color="var(--primary)">
                                            Dont't have an account?
                                            <Link
                                                to="/user/signup"
                                                style={{
                                                    color: 'var(--secondary)',
                                                    fontWeight: 'bold',
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                {' '}
                                                SignUp
                                            </Link>
                                        </Typography>
                                    </Box>
                                    <Button
                                        variant="outlined"
                                        startIcon={<LoginIcon />}
                                        color="inherit"
                                        fullWidth
                                    >
                                        Login
                                    </Button>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Container>
);

export default Login;