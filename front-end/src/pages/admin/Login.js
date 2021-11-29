import { Login as LoginIcon } from '@mui/icons-material';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useContext, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import common from '../../components/Common';
import appContext from '../../context/contexts/appContext';

const { Container } = common;

const AdminLoginPage = () => {
    const { adminLoginHandleSubmit } = useContext(appContext);
    const history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        if (localStorage.getItem('admin-auth-token')) {
            history.push('/admin/profile');
        }
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        await adminLoginHandleSubmit(emailRef.current.value, passwordRef.current.value, history);
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
                                        Admin Login
                                    </Typography>
                                </Box>
                                <Box p="1rem">
                                    <TextField
                                        id="outlined-basic"
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        margin="dense"
                                        inputRef={emailRef}
                                    />

                                    <TextField
                                        id="outlined-basic"
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        margin="dense"
                                        inputRef={passwordRef}
                                    />

                                    <Box pt="1rem" maxWidth="300px" color="var(--secondary)">
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
export default AdminLoginPage;
