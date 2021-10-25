import { Check as CheckIcon, People as PeopleIcon } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import common from '../Common';
import Item from './Item';

const { Container } = common;
function Highlighted() {
    return (
        <Box py="2rem">
            <Container>
                <Grid container>
                    <Item
                        title="Total Clients"
                        value="700"
                        icon={<PeopleIcon fontSize="inherit" color="inherit" />}
                    />

                    <Item
                        title="Total Users"
                        value="1500"
                        icon={<CheckIcon fontSize="inherit" color="inherit" />}
                    />

                    <Item
                        title="Total Employeers"
                        value="150"
                        icon={<PeopleIcon fontSize="inherit" color="inherit" />}
                        isNoneBorder
                    />
                </Grid>
            </Container>
        </Box>
    );
}
export default Highlighted;
