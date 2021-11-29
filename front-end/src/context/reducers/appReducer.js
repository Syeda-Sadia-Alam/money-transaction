import constant from '../constant';

// eslint-disable-next-line no-empty-pattern
const {
    APP_SET_ALERT_MESSAGE,
    APP_CLOSE_ALERT_MESSAGE,
    APP_LOADING_START,
    APP_LOADING_STOP,
    APP_FETCH_USER_DETAIL,
    APP_FETCH_USER_CARD_DETAIL,
    USER_PROFILE_UPDATE_HANDLE_CHANGE,
    FETCH_HISTORIES_DATA_SUCCESS,
    FETCH_ALL_USERS_DATA_SUCCESS,
    FETCH_ALL_USERS_CARDS_DATA_SUCCESS,
    CARD_STATUS_CHANGED_SUCCESS,
    FETCH_ALL_HISTORIES_DATA_SUCCESS,
    USER_REQUEST_STATUS_CHANGED_SUCCESS,
    USER_ADD_MONEY_SUCCESS,
    USER_DELETE_SUCCESS,
    FETCH_ADMIN_DETAIL_SUCCESS,
    FETCH_BANK_DETAIL_SUCCESS,
    SET_ADMIN_LOGGED_IN_STATUS,
    SET_USER_LOGGED_IN_STATUS,
} = constant;

const reducer = (state, actions) => {
    switch (actions.type) {
        case APP_SET_ALERT_MESSAGE:
            state = {
                ...state,
                messageInfo: {
                    isOpen: true,
                    ...actions.payload,
                },
            };
            return state;
        case APP_CLOSE_ALERT_MESSAGE:
            state = {
                ...state,
                messageInfo: {
                    isOpen: false,
                    status: null,
                    message: null,
                },
            };
            return state;
        case APP_LOADING_START:
            state = {
                ...state,
                isLoading: true,
            };
            return state;

        case APP_LOADING_STOP:
            state = {
                ...state,
                isLoading: false,
            };
            return state;
        case APP_FETCH_USER_DETAIL:
            state = {
                ...state,
                userDetail: {
                    ...state.userDetail,
                    ...actions.payload,
                },
            };
            return state;
        case APP_FETCH_USER_CARD_DETAIL:
            state = {
                ...state,
                cardDetail: {
                    ...state.cardDetail,
                    ...actions.payload,
                },
            };
            return state;
        case USER_PROFILE_UPDATE_HANDLE_CHANGE:
            state = {
                ...state,
                userDetail: {
                    ...state.userDetail,
                    [actions.payload.name]: actions.payload.value,
                },
            };
            return state;
        case FETCH_HISTORIES_DATA_SUCCESS:
            state = {
                ...state,
                histories: actions.payload,
            };
            return state;
        case FETCH_ALL_USERS_DATA_SUCCESS:
            state = {
                ...state,
                users: actions.payload,
            };
            return state;
        case FETCH_ALL_USERS_CARDS_DATA_SUCCESS:
            state = {
                ...state,
                cards: actions.payload,
            };
            return state;
        case CARD_STATUS_CHANGED_SUCCESS: {
            const updatedCards = state.cards.map((crd) => {
                if (crd._id === actions.payload._id) {
                    return {
                        ...crd,
                        ...actions.payload,
                    };
                }
                return crd;
            });

            state = {
                ...state,
                cards: updatedCards,
            };
            return state;
        }
        case FETCH_ALL_HISTORIES_DATA_SUCCESS:
            state = {
                ...state,
                allHistories: actions.payload,
            };
            return state;
        case USER_REQUEST_STATUS_CHANGED_SUCCESS: {
            const updateAllHistories = state.allHistories.map((history) => {
                if (actions.payload._id === history._id) {
                    return {
                        ...history,
                        ...actions.payload,
                    };
                }
                return history;
            });
            state = {
                ...state,
                allHistories: updateAllHistories,
            };
            return state;
        }

        case USER_ADD_MONEY_SUCCESS:
            state = {
                ...state,
                cardDetail: {
                    ...state.cardDetail,
                    ...actions.payload,
                },
            };
            return state;
        case USER_DELETE_SUCCESS: {
            const filteredUsers = state.users.filter((user) => user._id !== actions.payload);
            state = {
                ...state,
                users: [...filteredUsers],
            };
            return state;
        }
        case FETCH_ADMIN_DETAIL_SUCCESS:
            state = {
                ...state,
                adminDetail: actions.payload,
            };
            return state;
        case FETCH_BANK_DETAIL_SUCCESS:
            state = {
                ...state,
                bankDetail: actions.payload,
            };
            return state;
        case SET_ADMIN_LOGGED_IN_STATUS:
            state = {
                ...state,
                isLoggedInAdmin: !!localStorage.getItem('admin-auth-token'),
            };
            return state;
        case SET_USER_LOGGED_IN_STATUS:
            state = {
                ...state,
                isLoggedInUser: !!localStorage.getItem('user-auth-token'),
            };
            return state;
        default:
            return state;
    }
};

export default reducer;
