import { Box } from '@mui/material';
import common from '../components/Common';
import Services from '../components/Services/Services';

const { Title } = common;
function ServicesPage() {
    return (
        <Box py="6rem">
            <Title
                fTitle="Our"
                lTitle="Services"
                subTitle="We have provide the best services for you"
            />
            <Services />
        </Box>
    );
}
export default ServicesPage;
