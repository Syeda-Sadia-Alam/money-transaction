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
// eslint-disable-next-line no-unused-vars

const getUserToken = (history) => {
    const token = localStorage.getItem('user-auth-token');
    if (!token) {
        return history.push('/user/login');
    }
    return token;
};
const getAdminToken = (history) => {
    const token = localStorage.getItem('admin-auth-token');
    if (!token) {
        return history.push('/admin/login');
    }
    return token;
};

const main = (dispatch, state) => {
    const methods = {};
    // Take status to return the color for determination of status for visualization
    methods.getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return 'primary';
            case 'rejected':
                return 'error';
            case 'approved':
                return 'green';
            case 'activated':
                return 'green';
            case 'deactivated':
                return 'error';
            default:
                return 'text.secondary';
        }
    };
    // Set an alert message with the app to show anywhere
    methods.setAlertMessage = (status, message) => {
        dispatch({
            type: APP_SET_ALERT_MESSAGE,
            payload: {
                status,
                message,
            },
        });
    };
    methods.setUserAndAdminLoggedInStatus = () => {
        dispatch({
            type: SET_ADMIN_LOGGED_IN_STATUS,
        });

        dispatch({
            type: SET_USER_LOGGED_IN_STATUS,
        });
    };
    // Close an alert message with the app to invisible anywhere
    methods.closeAlertMessage = () => {
        dispatch({
            type: APP_CLOSE_ALERT_MESSAGE,
        });
    };
    // User Login action
    methods.userLoginHandleSubmit = async (email, password, history) => {
        try {
            let hasErrorMsg = null;
            if (!password) {
                hasErrorMsg = 'Please provide a password';
            }

            if (!email) {
                hasErrorMsg = 'Please provide a email';
            }
            if (email) {
                if (!email?.includes('@')) {
                    hasErrorMsg = 'Please provide a valid email address';
                }
            }
            if (hasErrorMsg) {
                dispatch({
                    type: APP_SET_ALERT_MESSAGE,
                    payload: {
                        status: 'info',
                        message: hasErrorMsg,
                    },
                });
                return;
            }
            dispatch({
                type: APP_LOADING_START,
            });
            const res = await fetch('/api/user/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();

            if (res.status === 200) {
                localStorage.setItem('user-auth-token', data.token);
                dispatch({
                    type: SET_USER_LOGGED_IN_STATUS,
                });
                history.push('/user/profile');
            } else {
                localStorage.removeItem('user-auth-token');
            }
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: res.status === 200 ? 'success' : 'error',
                    message: data.message,
                },
            });

            dispatch({
                type: APP_LOADING_STOP,
            });
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            localStorage.removeItem('user-auth-token');
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    // User Registration action
    methods.userRegistrationHandleSubmit = async (
        name,
        email,
        password,
        confirmPassword,
        history,
        isAdmin
    ) => {
        try {
            let hasErrorMsg = null;
            if (confirmPassword !== password) {
                hasErrorMsg = 'Invalid confirm password';
            }
            if (!password) {
                hasErrorMsg = 'Please provide a password';
            }
            if (!email) {
                hasErrorMsg = 'Please provide a email';
            }
            if (email) {
                if (!email?.includes('@')) {
                    hasErrorMsg = 'Please provide a valid email address';
                }
            }
            if (!name) {
                hasErrorMsg = 'Please provide a name';
            }
            if (hasErrorMsg) {
                dispatch({
                    type: APP_SET_ALERT_MESSAGE,
                    payload: {
                        status: 'info',
                        message: hasErrorMsg,
                    },
                });
                return;
            }
            dispatch({
                type: APP_LOADING_START,
            });

            const res = await fetch('/api/user/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await res.json();
            if (!isAdmin) {
                if (res.status === 201) {
                    history.push('/user/login');
                }
            }

            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: res.status === 201 ? 'success' : 'error',
                    message: data.message,
                },
            });
            dispatch({
                type: APP_LOADING_STOP,
            });
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    // Admin Login action
    methods.adminLoginHandleSubmit = async (email, password, history) => {
        try {
            let hasErrorMsg = null;
            if (!password) {
                hasErrorMsg = 'Please provide a password';
            }

            if (!email) {
                hasErrorMsg = 'Please provide a email';
            }
            if (email) {
                if (!email?.includes('@')) {
                    hasErrorMsg = 'Please provide a valid email address';
                }
            }
            if (hasErrorMsg) {
                dispatch({
                    type: APP_SET_ALERT_MESSAGE,
                    payload: {
                        status: 'info',
                        message: hasErrorMsg,
                    },
                });
                return;
            }
            dispatch({
                type: APP_LOADING_START,
            });
            const res = await fetch('/api/admin/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();

            if (res.status === 200) {
                localStorage.setItem('admin-auth-token', data.token);
                dispatch({
                    type: SET_ADMIN_LOGGED_IN_STATUS,
                });
                history.push('/admin/profile');
            } else {
                localStorage.removeItem('admin-auth-token');
            }
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: res.status === 200 ? 'success' : 'error',
                    message: data.message,
                },
            });

            dispatch({
                type: APP_LOADING_STOP,
            });
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            localStorage.removeItem('admin-auth-token');
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    // Fetch User Detail Data
    methods.getUserProfileDetail = async (history) => {
        dispatch({
            type: APP_LOADING_START,
        });

        try {
            const res = await fetch('/api/user/detail', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                    'x-user-auth-token': getUserToken(history),
                },
            });
            const data = await res.json();
            if (res.status === 200) {
                dispatch({
                    type: APP_FETCH_USER_DETAIL,
                    payload: data.userDetail,
                });
            }
            dispatch({
                type: APP_LOADING_STOP,
            });
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    // Fetch User Card Detail Data
    methods.getUserCardDetail = async (history) => {
        dispatch({
            type: APP_LOADING_START,
        });

        try {
            const res = await fetch('/api/card', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                    'x-user-auth-token': getUserToken(history),
                },
            });
            const data = await res.json();

            if (res.status === 200) {
                dispatch({
                    type: APP_FETCH_USER_CARD_DETAIL,
                    payload: data.cardDetail,
                });
            }
            dispatch({
                type: APP_LOADING_STOP,
            });
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    methods.userProfileUpdateHandleChange = (e) => {
        dispatch({
            type: USER_PROFILE_UPDATE_HANDLE_CHANGE,
            payload: e.target,
        });
    };
    // User Profile Update action
    methods.userProfileUpdateHandleSubmit = async (history) => {
        const {
            userDetail: { name, address, phone, gender },
        } = state;
        dispatch({
            type: APP_LOADING_START,
        });

        try {
            let hasErrorMsg = null;

            if (!gender) {
                hasErrorMsg = 'Please select your gender';
            }
            if (!address) {
                hasErrorMsg = 'Please provide your address';
            }
            if (!phone) {
                hasErrorMsg = 'Please provide a phone number';
            }
            if (!name) {
                hasErrorMsg = 'Please provide a name';
            }
            if (hasErrorMsg) {
                dispatch({
                    type: APP_SET_ALERT_MESSAGE,
                    payload: {
                        status: 'info',
                        message: hasErrorMsg,
                    },
                });
                return;
            }
            const res = await fetch('/api/user/profile-update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                    'x-user-auth-token': getUserToken(history),
                },
                body: JSON.stringify({ name, address, phone, gender }),
            });
            const data = await res.json();

            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: res.status === 200 ? 'success' : 'error',
                    message: data.message,
                },
            });
            dispatch({
                type: APP_LOADING_STOP,
            });
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    // User Password Change
    methods.userPasswordChangeHandleSubmit = async (
        oldPassword,
        newPassword,
        confirmPassword,
        history
    ) => {
        try {
            let hasErrorMsg = null;
            if (newPassword !== confirmPassword) {
                hasErrorMsg = 'Invalid confirm password';
            }
            if (!confirmPassword) {
                hasErrorMsg = 'Please provide a confirm password';
            }
            if (!newPassword) {
                hasErrorMsg = 'Please provide a new password';
            }
            if (!oldPassword) {
                hasErrorMsg = 'Please provide your old password';
            }
            if (hasErrorMsg) {
                dispatch({
                    type: APP_SET_ALERT_MESSAGE,
                    payload: {
                        status: 'info',
                        message: hasErrorMsg,
                    },
                });
                return;
            }
            dispatch({
                type: APP_LOADING_START,
            });

            const res = await fetch('/api/user/auth/forgot-password ', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                    'x-user-auth-token': getUserToken(history),
                },
                body: JSON.stringify({ oldPassword, newPassword }),
            });
            const data = await res.json();

            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: res.status === 200 ? 'success' : 'error',
                    message: data.message,
                },
            });
            dispatch({
                type: APP_LOADING_STOP,
            });
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    // User card deposit request
    methods.userCardDepositRequest = async (amount, history) => {
        if (!amount) {
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'warning',
                    message: 'Please provide minimuin deposit of amount',
                },
            });
            return;
        }
        dispatch({
            type: APP_LOADING_START,
        });

        try {
            const res = await fetch('/api/card/deposit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                    'x-user-auth-token': getUserToken(history),
                },
                body: JSON.stringify({ amount }),
            });
            const data = await res.json();
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: res.status === 200 ? 'success' : 'warning',
                    message: data.message,
                },
            });
            dispatch({
                type: APP_LOADING_STOP,
            });
            if (res.status === 200) {
                methods.fetchHistoriesData(history, 'deposit');
            }
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    // Fetch card deposit history
    methods.fetchHistoriesData = async (history, query) => {
        dispatch({
            type: APP_LOADING_START,
        });

        try {
            const res = await fetch(`/api/card/histories?query=${query || ''}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                    'x-user-auth-token': getUserToken(history),
                },
            });
            const data = await res.json();

            if (res.status === 200) {
                dispatch({
                    type: FETCH_HISTORIES_DATA_SUCCESS,
                    payload: data.histories,
                });
            }
            dispatch({
                type: APP_LOADING_STOP,
            });
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    // User card withdraw request
    methods.userCardWithdrawRequest = async (amount, number, platform, history) => {
        if (!amount) {
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'warning',
                    message: 'Please provide minimuin withdraw of amount',
                },
            });
            return;
        }
        if (!platform) {
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'warning',
                    message: 'Please select a platform where you want to receive payment',
                },
            });
            return;
        }
        if (!number) {
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'warning',
                    message: 'Please provide a number according to the withdrawal platform.',
                },
            });
            return;
        }

        dispatch({
            type: APP_LOADING_START,
        });

        try {
            const res = await fetch('/api/card/withdraw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                    'x-user-auth-token': getUserToken(history),
                },
                body: JSON.stringify({ amount, number, platform }),
            });
            const data = await res.json();
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: res.status === 200 ? 'success' : 'warning',
                    message: data.message,
                },
            });
            dispatch({
                type: APP_LOADING_STOP,
            });
            if (res.status === 200) {
                methods.fetchHistoriesData(history, 'withdraw');
            }
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    // User to user transfer request
    methods.userCardTransferRequest = async (amount, number, platform, history) => {
        if (!amount) {
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'warning',
                    message: 'Please provide minimuin transfer of amount',
                },
            });
            return;
        }
        if (!number) {
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'warning',
                    message: 'Please provide the receiver number according to the platform!',
                },
            });
            return;
        }
        dispatch({
            type: APP_LOADING_START,
        });

        try {
            const res = await fetch('/api/card/transfer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                    'x-user-auth-token': getUserToken(history),
                },
                body: JSON.stringify({ amount, number, platform }),
            });
            const data = await res.json();
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: res.status === 200 ? 'success' : 'warning',
                    message: data.message,
                },
            });
            dispatch({
                type: APP_LOADING_STOP,
            });
            if (res.status === 200) {
                methods.fetchHistoriesData(history, 'transfer');
            }
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    // Fetch all users
    methods.fetchAllUsers = async (history) => {
        dispatch({
            type: APP_LOADING_START,
        });

        try {
            const res = await fetch('/api/user/all/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                    'x-admin-auth-token': getAdminToken(history),
                },
            });
            const data = await res.json();
            if (res.status === 200) {
                dispatch({
                    type: FETCH_ALL_USERS_DATA_SUCCESS,
                    payload: data.users,
                });
            }
            dispatch({
                type: APP_LOADING_STOP,
            });
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    // Fetch all cards
    methods.fetchAllCards = async (history) => {
        dispatch({
            type: APP_LOADING_START,
        });

        try {
            const res = await fetch('/api/card/all/cards', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                    'x-admin-auth-token': getAdminToken(history),
                },
            });
            const data = await res.json();

            if (res.status === 200) {
                dispatch({
                    type: FETCH_ALL_USERS_CARDS_DATA_SUCCESS,
                    payload: data.cards,
                });
            }
            dispatch({
                type: APP_LOADING_STOP,
            });
            if (res.status !== 200) {
                dispatch({
                    type: APP_SET_ALERT_MESSAGE,
                    payload: {
                        status: 'error',
                        message: data.message,
                    },
                });
            }
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    // Change the status of the card
    methods.changeCardStatusById = async (id, status, history) => {
        dispatch({
            type: APP_LOADING_START,
        });

        try {
            const res = await fetch(`/api/card/status/${id}?status=${status}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                    'x-admin-auth-token': getAdminToken(history),
                },
            });
            const data = await res.json();
            if (res.status === 200) {
                dispatch({
                    type: CARD_STATUS_CHANGED_SUCCESS,
                    payload: data.card,
                });
            }
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: res.status === 200 ? 'success' : 'error',
                    message: data.message,
                },
            });
            dispatch({
                type: APP_LOADING_STOP,
            });
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    methods.fetchAllHistoriesData = async (history, query) => {
        dispatch({
            type: APP_LOADING_START,
        });

        try {
            const res = await fetch(`/api/card/all/histories?query=${query || ''}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                    'x-admin-auth-token': getAdminToken(history),
                },
            });
            const data = await res.json();

            if (res.status === 200) {
                dispatch({
                    type: FETCH_ALL_HISTORIES_DATA_SUCCESS,
                    payload: data.histories,
                });
            }
            dispatch({
                type: APP_LOADING_STOP,
            });
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    // Change the status of the user request(deposit,withdraw and transfer)
    methods.changeUserRequestHistory = async (id, status, history) => {
        dispatch({
            type: APP_LOADING_START,
        });
        try {
            const res = await fetch(`/api/card/history/status/${id}?status=${status}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                    'x-admin-auth-token': getAdminToken(history),
                },
            });
            const data = await res.json();

            if (res.status === 200) {
                dispatch({
                    type: USER_REQUEST_STATUS_CHANGED_SUCCESS,
                    payload: data.history,
                });
            }
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: res.status === 200 ? 'success' : 'error',
                    message: data.message,
                },
            });
            dispatch({
                type: APP_LOADING_STOP,
            });
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    // Money add to card
    methods.moneyAddToCard = async (id, history) => {
        dispatch({
            type: APP_LOADING_START,
        });

        try {
            const res = await fetch(`/api/card/add/money/${id || ''}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                    'x-user-auth-token': getUserToken(history),
                },
            });
            const data = await res.json();

            if (res.status === 200) {
                dispatch({
                    type: USER_ADD_MONEY_SUCCESS,
                    payload: data.card,
                });
            }
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: res.status === 200 ? 'success' : 'error',
                    message: data.message,
                },
            });
            dispatch({
                type: APP_LOADING_STOP,
            });
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    // Delete user by Id
    methods.userDeleteById = async (id, history) => {
        dispatch({
            type: APP_LOADING_START,
        });

        try {
            const res = await fetch(`/api/user/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                    'x-admin-auth-token': getAdminToken(history),
                },
            });
            const data = await res.json();

            if (res.status === 200) {
                dispatch({
                    type: USER_DELETE_SUCCESS,
                    payload: id,
                });
            }
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: res.status === 200 ? 'success' : 'error',
                    message: data.message,
                },
            });
            dispatch({
                type: APP_LOADING_STOP,
            });
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    // Admin Password Change
    methods.adminChangePasswordHandleSubmit = async (
        oldPassword,
        newPassword,
        confirmPassword,
        history
    ) => {
        try {
            let hasErrorMsg = null;
            if (newPassword !== confirmPassword) {
                hasErrorMsg = 'Invalid confirm password';
            }
            if (!confirmPassword) {
                hasErrorMsg = 'Please provide a confirm password';
            }
            if (!newPassword) {
                hasErrorMsg = 'Please provide a new password';
            }
            if (!oldPassword) {
                hasErrorMsg = 'Please provide your old password';
            }
            if (hasErrorMsg) {
                dispatch({
                    type: APP_SET_ALERT_MESSAGE,
                    payload: {
                        status: 'info',
                        message: hasErrorMsg,
                    },
                });
                return;
            }
            dispatch({
                type: APP_LOADING_START,
            });

            const res = await fetch('/api/admin/auth/change-password ', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                    'x-admin-auth-token': getAdminToken(history),
                },
                body: JSON.stringify({ oldPassword, newPassword }),
            });
            const data = await res.json();
            if (res.status === 200) {
                localStorage.setItem('admin-auth-token', data.token);
            }
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: res.status === 200 ? 'success' : 'error',
                    message: data.message,
                },
            });

            dispatch({
                type: APP_LOADING_STOP,
            });
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    // To fetch admin profile detail
    methods.fetchAdminDetail = async (history) => {
        dispatch({
            type: APP_LOADING_START,
        });

        try {
            const res = await fetch('/api/admin/detail', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                    'x-admin-auth-token': getAdminToken(history),
                },
            });
            const data = await res.json();
            if (res.status === 200) {
                dispatch({
                    type: FETCH_ADMIN_DETAIL_SUCCESS,
                    payload: data.adminDetail,
                });
            }
            dispatch({
                type: APP_LOADING_STOP,
            });
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };
    // To fetch admin profile detail
    methods.fetchBankDetail = async (history) => {
        dispatch({
            type: APP_LOADING_START,
        });

        try {
            const res = await fetch('/api/card/bank/detail', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.apiKey,
                    'x-admin-auth-token': getAdminToken(history),
                },
            });
            const data = await res.json();

            if (res.status === 200) {
                dispatch({
                    type: FETCH_BANK_DETAIL_SUCCESS,
                    payload: data.bankDetail,
                });
            }
            dispatch({
                type: APP_LOADING_STOP,
            });
        } catch (error) {
            dispatch({
                type: APP_LOADING_STOP,
            });
            dispatch({
                type: APP_SET_ALERT_MESSAGE,
                payload: {
                    status: 'error',
                    message: error.message,
                },
            });
        }
    };

    return methods;
};

export default main;
