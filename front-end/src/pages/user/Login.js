import { Login as LoginIcon } from '@mui/icons-material';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useContext, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import common from '../../components/Common';
import appContext from '../../context/contexts/appContext';

const { Container } = common;

const Login = () => {
    const history = useHistory();
    const { userLoginHandleSubmit } = useContext(appContext);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    useEffect(() => {
        if (localStorage.getItem('user-auth-token')) {
            history.push('/user/profile');
        }
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        userLoginHandleSubmit(emailRef.current.value, passwordRef.current.value, history);
    };
    return (
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
                            <Paper
                                component="form"
                                onSubmit={handleSubmit}
                                elevation={3}
                                style={{ width: '100%' }}
                            >
                                <Box pt="1rem" px="1rem">
                                    <Typography variant="h4" color="var(--primary)">
                                        Login
                                    </Typography>
                                </Box>
                                <Box p="1rem">
                                    <TextField
                                        id="user-email"
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        margin="dense"
                                        inputRef={emailRef}
                                    />

                                    <TextField
                                        id="user-password"
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        margin="dense"
                                        type="password"
                                        inputRef={passwordRef}
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
                                            type="submit"
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
};
export default Login;
