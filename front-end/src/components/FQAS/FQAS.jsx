import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Container from '../Common/Container';

// eslint-disable-next-line no-unused-vars
const questions = [
    {
        question: 'How can I transfer money?',
        answer: 'Please go to the transfer button  of your  profile page then transfer your money easily.',
    },
    {
        question: 'How to do change my information?',
        answer: 'Send us a message what do  you  want to change,We will change it.',
    },
    {
        question: 'Is my account is safe?',
        answer: "Yes, because none without you Won't know your personal information.",
    },
    {
        question: 'Can I withdraw my money through Bkash?',
        answer: 'You have to provide the bkash account number & amount of money then we will send your money.',
    },
    {
        question: 'Can a person create two account here?',
        answer: 'No, because the registration is verified registration so within one nid card, no person can create multiple account.',
    },
    {
        question: 'How can I contact  with you?',
        answer: 'Go to the contact us button then send us an email.',
    },
    {
        question: 'If I watch a videos multiple time will it make more money?',
        answer: 'No, a video will make money only one time.',
    },
];

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container>
            {questions.map(({ question, answer }, ind) => (
                <Accordion
                    expanded={expanded === `panel1-${ind}`}
                    onChange={handleChange(`panel1-${ind}`)}
                    key={question}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${ind}bh-content`}
                        id={`panel${ind}bh-header`}
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0 }}>{question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Container>
    );
}
