import React from 'react';

const GlobalContext = React.createContext({
    ui: {
        isLoading: false,
        setIsLoading: () => {},
        snackbar: {},
        setSnackbar: () => {},
        auth: {},
        setAuth: () => {},
    },
});

export default GlobalContext;
