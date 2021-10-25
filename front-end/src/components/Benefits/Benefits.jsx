import { Alert, Box, Grid } from '@mui/material';
import common from '../Common';

const { Container } = common;

const Item = ({ title }) => (
    <Grid item xs={12} md={6}>
        <Alert variant="outlined" severity="success" style={{ borderRadius: '2rem' }}>
            {title}
        </Alert>
    </Grid>
);
function Benefits() {
    return (
        <Container>
            <Box py="2rem">
                <Grid container spacing={2}>
                    <Item title="A user friendly online platform." />
                    <Item title="Provide you a card without any fee" />
                    <Item title="Get rewards for content showing." />
                    <Item title="Has none of the most annoying fees like traditional bank." />
                </Grid>
            </Box>
        </Container>
    );
}
export default Benefits;
