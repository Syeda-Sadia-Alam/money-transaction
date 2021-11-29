export const userAuthTokenVerify = async (history) => {
    try {
        const res = await fetch('/api/user/auth/token-verify', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-user-auth-token': localStorage.getItem('user-auth-token'),
            },
        });
        const isValid = await res.json();
        if (!isValid) {
            localStorage.removeItem('user-auth-token');
            history.push('/user/login');
        }
    } catch (e) {
        localStorage.removeItem('user-auth-token');
        history.push('/user/login');
    }
};

export const adminAuthTokenVerify = async (history) => {
    try {
        const res = await fetch('/api/admin/auth/token-verify', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-admin-auth-token': localStorage.getItem('admin-auth-token'),
            },
        });
        const isValid = await res.json();
        if (!isValid) {
            localStorage.removeItem('admin-auth-token');
            history.push('/admin/login');
        }
    } catch (e) {
        localStorage.removeItem('admin-auth-token');
        history.push('/admin/login');
    }
};

export const userLogoutHandleClick = (history) => {
    localStorage.removeItem('user-auth-token');
    history.push('/user/auth/login');
};
