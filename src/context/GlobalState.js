import React, { useState, useReducer, useEffect } from 'react';
import GlobalContext from './global-context';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const GlobalState = (props) => {
    const [isAuth, setIsAuth] = useState(false);
    const [userId, setUserId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({
        message: '',
        severity: 'success',
    });

    // useEffect(() => {
    //   localStorage.getItem("access_token")
    // }, [isAuth])

    return (
        <GlobalContext.Provider
            value={{
                ui: {
                    isLoading,
                    setIsLoading,
                    snackbar,
                    setSnackbar,
                },
                isAuth,
                setIsAuth,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
