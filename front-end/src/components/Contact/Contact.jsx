import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Paper, TextField } from '@mui/material';
import { useContext, useRef } from 'react';
import appContext from '../../context/contexts/appContext';
import Container from '../Common/Container';

const Contact = () => {
    const { sendContactHandleSubmit } = useContext(appContext);

    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();
    const getValue = (x) => x.current.value;

    const handleSubmit = async (e) => {
        e.preventDefault();
        sendContactHandleSubmit({
            name: getValue(nameRef),
            email: getValue(emailRef),
            subject: getValue(subjectRef),
            message: getValue(messageRef),
        });
        nameRef.current.value = '';
        emailRef.current.value = '';
        subjectRef.current.value = '';
        messageRef.current.value = '';
    };
    return (
        <Container>
            <Paper elevation={3} component="form" onSubmit={handleSubmit}>
                <Box p="1rem">
                    <Box display="flex">
                        <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            inputRef={nameRef}
                        />
                        <Box width="1rem" />
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            inputRef={emailRef}
                        />
                    </Box>
                    <TextField
                        id="outlined-basic"
                        label="Subject"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        inputRef={subjectRef}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Message"
                        multiline
                        rows={6}
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        inputRef={messageRef}
                    />
                    <Box pt="1rem" maxWidth="300px">
                        <Button
                            variant="outlined"
                            startIcon={<SendIcon />}
                            color="secondary"
                            fullWidth
                            type="submit"
                        >
                            Send US
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default Contact;
