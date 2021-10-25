import { Box } from '@mui/material';
import common from '../components/Common';
import Contact from '../components/Contact/Contact';

const { Title } = common;

function ContactPage() {
    return (
        <Box py="6rem">
            <Title fTitle="Contact" lTitle="US" />
            <Contact />
        </Box>
    );
}
export default ContactPage;
