export const redirectToLogin = () => {
    window.location.replace(`${process.env.REACT_APP_LOGIN_URL}`);
};

export const redirectToLogout = () => {
    window.location.replace(`${process.env.REACT_APP_LOGOUT_URL}`);
};