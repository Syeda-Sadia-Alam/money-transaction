import { LockOpen as LockOpenIcon } from '@mui/icons-material';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import common from '../../components/Common';
import appContext from '../../context/contexts/appContext';

const { Container } = common;
const SignUpPage = () => {
    const history = useHistory();
    const { userRegistrationHandleSubmit } = useContext(appContext);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const [isVerification, setVerification] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('user-auth-token')) {
            history.push('/user/profile');
        }
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        userRegistrationHandleSubmit(
            nameRef.current.value,
            emailRef.current.value,
            passwordRef.current.value,
            confirmPasswordRef.current.value,
            false,
            setVerification
        );
    };
    return (
        <Container>
            <Box py="4rem">
                <Grid container spacing={2}>
                    <Grid item md={5}>
                        <Box>
                            <Box
                                component="img"
                                src={
                                    isVerification
                                        ? '/img/email-verification.jpg'
                                        : '/img/Mobile-login.jpg'
                                }
                                width="100%"
                                height="auto"
                            />
                        </Box>
                    </Grid>
                    <Grid item md={7}>
                        <Box
                            height="100%"
                            flexDirection="row"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            {!isVerification ? (
                                <Paper elevation={3} style={{ width: '100%' }}>
                                    <Box pt="1rem" px="1rem">
                                        <Typography variant="h4" color="var(--primary)">
                                            SignUp
                                        </Typography>
                                    </Box>
                                    <Box component="form" onSubmit={handleSubmit} p="1rem">
                                        <TextField
                                            id="user-name"
                                            label="Name"
                                            variant="outlined"
                                            fullWidth
                                            margin="dense"
                                            inputRef={nameRef}
                                        />
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
                                        <TextField
                                            id="user-confirm-password"
                                            label="Confirm Password"
                                            variant="outlined"
                                            fullWidth
                                            margin="dense"
                                            type="password"
                                            inputRef={confirmPasswordRef}
                                        />

                                        <Box pt="1rem" maxWidth="300px" color="var(--secondary)">
                                            <Box display="flex" pb="0.25rem">
                                                <Typography
                                                    variant="subtitle2"
                                                    color="var(--primary)"
                                                >
                                                    Already have an account?
                                                    <Link
                                                        to="/user/login"
                                                        style={{
                                                            color: 'var(--secondary)',
                                                            fontWeight: 'bold',
                                                            textDecoration: 'none',
                                                        }}
                                                    >
                                                        {' '}
                                                        Login
                                                    </Link>
                                                </Typography>
                                            </Box>
                                            <Button
                                                variant="outlined"
                                                startIcon={<LockOpenIcon />}
                                                color="inherit"
                                                fullWidth
                                                type="submit"
                                            >
                                                Signup
                                            </Button>
                                        </Box>
                                    </Box>
                                </Paper>
                            ) : (
                                <Box>
                                    <Typography component="h3" variant="h3" color="var(--primary)">
                                        Email Verification
                                    </Typography>

                                    <Typography component="h6" variant="h6" color="text.secondary">
                                        Thanks for signup here! We have already sent a verification
                                        link to your email. Please check your email!
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};
export default SignUpPage;
