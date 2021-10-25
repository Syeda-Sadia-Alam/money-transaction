import { Box, Grid } from '@mui/material';
import Container from '../Common/Container';
import Card from './Item';

const Offer = () => (
    <Container>
        <Box py="2rem">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        imageLink="/img/learning.svg"
                        name="Learn"
                        description="Some educational content to enrich your knowledge. Gain more reward & knowledge"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        imageLink="/img/growing.svg"
                        name="Grow"
                        description="Earn & savings money become less of a struggle if it can do in one online platform."
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Card
                        imageLink="/img/growing.svg"
                        name="Grow"
                        description="Earn & savings money become less of a struggle if it can do in one online platform."
                    />
                </Grid>
            </Grid>
        </Box>
    </Container>
);

export default Offer;
