import { Box, Grid } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../../../components/Common/Container';
import MainContent from '../../../components/User/Main/MainContent';
import Sidebar from '../../../components/User/Sidebar/Sidebar';
import appContext from '../../../context/contexts/appContext';
import { userAuthTokenVerify } from '../../../services/services';

function ProfilePage() {
    const { getUserProfileDetail, getUserCardDetail } = useContext(appContext);
    const history = useHistory();
    useEffect(async () => {
        await getUserProfileDetail(history);
        await getUserCardDetail(history);
        await userAuthTokenVerify(history);
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
