import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Paper, TextField } from '@mui/material';
import Container from '../Common/Container';

const Contact = () => (
    <Container>
        <Paper elevation={3}>
            <Box p="1rem">
                <Box display="flex">
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                    />
                    <Box width="1rem" />
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                    />
                </Box>
                <TextField
                    id="outlined-basic"
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    margin="dense"
                />
                <TextField
                    id="outlined-basic"
                    label="Message"
                    multiline
                    rows={6}
                    variant="outlined"
                    margin="dense"
                    fullWidth
                />
                <Box pt="1rem" maxWidth="300px">
                    <Button variant="outlined" startIcon={<SendIcon />} color="secondary" fullWidth>
                        Send US
                    </Button>
                </Box>
            </Box>
        </Paper>
    </Container>
);

export default Contact;
