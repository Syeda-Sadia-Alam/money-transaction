import { useReducer } from 'react';
import actions from '../actions';
import contexts from '../contexts';
import reducers from '../reducers';

const { userActions } = actions;
const { userContext } = contexts;
const { userReducers } = reducers;

const initState = {};

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducers, initState);
    const applicationActions = userActions(dispatch, state);
    return (
        <userContext.Provider value={{ state, ...applicationActions }}>
            {children}
        </userContext.Provider>
    );
};

export default UserProvider;
