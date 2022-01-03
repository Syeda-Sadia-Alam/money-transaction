import { useContext, useEffect } from 'react';
// import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import common from '../../components/Common';
import appContext from '../../context/contexts/appContext';

const { Container } = common;

const Verification = () => {
    const history = useHistory();
    const { token } = useParams();

    const { userSignupVerification } = useContext(appContext);

    useEffect(() => {
        if (localStorage.getItem('user-auth-token')) {
            history.push('/user/profile');
        } else {
            userSignupVerification(token, history);
        }
    }, []);

    return <Container>Please wait To Complete Verification</Container>;
};
export default Verification;
