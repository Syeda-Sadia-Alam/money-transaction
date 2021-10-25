/* eslint-disable prettier/prettier */
import {
    AttachMoney as AttachMoneyIcon,
    Language as LanguageIcon,
    LocalAtm as LocalAtmIcon,
    MoneyOff as MoneyOffIcon,
    Speed as SpeedIcon,
    SupportAgent as SupportAgentIcon
} from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import Container from '../Common/Container';
import Item from './Item';

const services = [
    {
        name: 'Reduced fees',
        description: 'Pay up to 70% less compared to standard wire transfers. No hidden fees.',
        icon: <MoneyOffIcon color="inherit" style={{ fontSize: '3.5rem' }}/>,
    },
    {
        name: 'Get paid in popular currencies',
        description:
            'Use receiving accounts in a growing number of currencies and get paid like a local.',
        icon: <AttachMoneyIcon color="inherit" style={{ fontSize: '3.5rem' }}/>,
    },
    {
        name: 'Simplify your payments',
        description:
            'Pay contractors and suppliers anywhere in the world straight from your Payoneer balance.',
        icon: <LanguageIcon color="inherit" style={{ fontSize: '3.5rem' }}/>,
    },
    {
        name: 'Withdraw funds locally',
        description:
            'Our team is available any time, day or night, to take your questions and offer assistance. No worries!',
        icon: <LocalAtmIcon color="inherit" style={{ fontSize: '3.5rem' }} />,
    },
    {
        name: '24/7 multilingual support',
        description:
            'Our team is available any time, day or night, to take your questions and offer assistance. No worries!',
        icon: <SupportAgentIcon color="inherit" style={{ fontSize: '3.5rem' }}/>,
    },
    {
        name: 'Working Capital',
        description: 'Give your business a boost with instant cash injections.',
        icon: <SpeedIcon color="inherit" style={{ fontSize: '3.5rem' }} />,
    },
];

export default function Services() {
    return (
        <Container>
            <Box pt="3rem">
                <Grid container spacing={4}>
                    {services.map((item) => (
                        <Grid item xs={12} sm={4} key={item.name}>
                            <Item {...item} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}
