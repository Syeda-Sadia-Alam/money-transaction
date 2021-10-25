import { Box, Grid } from '@mui/material';
import Container from '../../../components/Common/Container';
import MainContent from '../../../components/User/Main/MainContent';
import Sidebar from '../../../components/User/Sidebar/Sidebar';

function ProfilePage() {
    return (
        <Box py="4rem">
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <MainContent />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProfilePage;
