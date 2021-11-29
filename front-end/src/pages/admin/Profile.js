import { Box, Grid } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MainContent from '../../components/Admin/Main/MainContent';
import Sidebar from '../../components/Admin/Sidebar/Sidebar';
import Container from '../../components/Common/Container';
import appContext from '../../context/contexts/appContext';
import { adminAuthTokenVerify } from '../../services/services';

function ProfilePage() {
    const { fetchAdminDetail } = useContext(appContext);
    const history = useHistory();
    useEffect(async () => {
        await adminAuthTokenVerify(history);
        await fetchAdminDetail(history);
    }, []);
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
