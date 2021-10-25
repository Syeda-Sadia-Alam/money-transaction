import { Box, Divider } from '@mui/material';
import Benefits from '../components/Benefits/Benefits';
import common from '../components/Common';
import FQAS from '../components/FQAS/FQAS';
import Highlighted from '../components/Highlighted/Highlighted';
import Offer from '../components/Offer/Offer';
import Services from '../components/Services/Services';
import Slider from '../components/Slider/Slider';

const { Title } = common;
const Gap = ({ children }) => <Box py="6rem">{children}</Box>;
function Home() {
    return (
        <main>
            <Slider />
            <Divider />
            <Gap>
                <Title
                    fTitle="Our"
                    lTitle="Offer"
                    subTitle="You Don't need to have any money to start with us,
just click the sign up & show our content to make money"
                />
                <Offer />
            </Gap>
            <Gap>
                <Title
                    fTitle="Benefits"
                    lTitle="From Us"
                    subTitle="See how you can get benefit from us"
                />
                <Benefits />
            </Gap>
            <Gap>
                <Title
                    fTitle="Our"
                    lTitle="Services"
                    subTitle="We have provide the best services for you"
                />
                <Services />
            </Gap>
            <Gap>
                <Title fTitle="Highlighted" lTitle="Things" subTitle="See our highlighted things" />
                <Highlighted />
            </Gap>

            <Gap>
                <Title
                    fTitle="Frequently Asked"
                    lTitle="Questions"
                    subTitle="Frequently Asked Questions (FQAS)"
                />
                <FQAS />
            </Gap>
        </main>
    );
}
export default Home;
