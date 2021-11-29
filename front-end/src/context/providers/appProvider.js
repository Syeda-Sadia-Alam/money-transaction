import { useReducer } from 'react';
import appActions from '../actions/appActions';
import appContext from '../contexts/appContext';
import appReducer from '../reducers/appReducer';

const initState = {
    messageInfo: {
        isOpen: false,
        status: null,
        message: null,
    },
    userDetail: {},
    adminDetail: {},
    cardDetail: {},
    histories: [],
    allHistories: [],
    users: [],
    cards: [],
    isLoading: false,
    bankDetail: {},
    isLoggedInAdmin: false,
    isLoggedInUser: false,
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initState);
    const applicationActions = appActions(dispatch, state);
    return (
        <appContext.Provider value={{ state, ...applicationActions }}>
            {children}
        </appContext.Provider>
    );
};

export default AppProvider;
