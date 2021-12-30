import { useState } from 'react';
import GlobalContext from './global-context';

const GlobalState = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [auth, setAuth] = useState({
        first_name: '',
        last_name: '',
        email: '',
        id: '',
    });
    const [snackbar, setSnackbar] = useState({
        message: '',
        severity: 'success',
    });

    return (
        <GlobalContext.Provider
            value={{
                ui: {
                    isLoading,
                    setIsLoading,
                    snackbar,
                    setSnackbar,
                    auth,
                    setAuth,
                },
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
