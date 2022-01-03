/* eslint-disable jsx-a11y/media-has-caption */
import { Check as CheckIcon, Task as TaskIcon } from '@mui/icons-material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box, Button, Divider, ListItem, Typography } from '@mui/material';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import YouTube from 'react-youtube';
import appContext from '../../../../context/contexts/appContext';
import videosURLs from './videos';

const Item = ({ name, value, divider }) => (
    <ListItem divider={divider}>
        <Box width="100%" display="flex" justifyContent="space-between">
            <Typography variant="subtitle1" color="text.secondary">
                {name}
            </Typography>
            <Typography>{value}</Typography>
        </Box>
    </ListItem>
);

export default function EarnMoney() {
    const theme = useTheme();

    const history = useHistory();
    const [isResolved, setResolved] = useState(false);
    const startFromRandom = Math.floor(Math.random() * (videosURLs.length - 1)) + 1;
    const [state, setState] = useState(startFromRandom);
    const {
        state: {
            cardDetail: { _id, belance, number },
        },
        moneyAddToCard,
        setAlertMessage,
    } = useContext(appContext);
    const handlePlayEnded = () => {
        setResolved(true);
    };
    const handleClick = () => {
        setResolved(false);

        setState(state + 1);
        moneyAddToCard(_id, history);
    };
    const handleChangeVideo = (isBack) => {
        if (isBack) {
            setState(state - 1);
        } else {
            setState(state + 1);
        }
    };
    const opts = {
        height: '450',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };
    return (
        <>
            <Box boxShadow={2} p="1rem">
                <Box pb="0.25rem">
                    <Typography variant="h5" color="var(--primary)">
                        Earn Money
                    </Typography>
                </Box>
                <Divider />
                <Item name="Card Number" value={number || '1234-XXXX-XXXX-XXXX'} divider />
                <Item name="Account Belance" value={`${belance}$` || 'N/A'} />
            </Box>
            <Box boxShadow={2} p="0.5rem" mt="1rem">
                <Box pt="0.25rem" pb="0.5rem" textAlign="center">
                    <Typography variant="h6" color="text.secondary">
                        Total Available Videos :
                        <Typography component="span" variant="h6" color="var(--primary)">
                            {' '}
                            {videosURLs.length}
                        </Typography>
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        Current Video :
                        <Typography component="span" variant="subtitle1" color="var(--primary)">
                            {' '}
                            {state}
                        </Typography>
                    </Typography>
                </Box>
                <YouTube videoId={videosURLs[state]} opts={opts} onEnd={handlePlayEnded} />
                {isResolved && (
                    <Box mt="0.25rem">
                        <Button
                            onClick={() =>
                                videosURLs.length === state
                                    ? setAlertMessage(
                                          'success',
                                          'You have successfully watched all the videos'
                                      )
                                    : handleClick()
                            }
                            startIcon={videosURLs.length === state ? <TaskIcon /> : <CheckIcon />}
                            color={videosURLs.length === state ? 'secondary' : 'success'}
                            variant="contained"
                            fullWidth
                        >
                            {videosURLs.length === state ? 'Completed' : 'Claim Now'}
                        </Button>
                    </Box>
                )}
                <MobileStepper
                    variant="dots"
                    steps={videosURLs.length}
                    position="static"
                    activeStep={state}
                    sx={{ pt: '1rem' }}
                    nextButton={
                        <Button
                            size="small"
                            onClick={() => handleChangeVideo(false)}
                            disabled={state === videosURLs.length}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={() => handleChangeVideo(true)}
                            disabled={state === 0}
                        >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </Box>
        </>
    );
}
