import React from 'react'

const GlobalContext = React.createContext({
  ui: {
    loading: false,
    setLoading: () => { },
    snackbar: {},
    setSnackbar: () => { }
  },
  auth: {
    jwt: false,
    setJwt: () => { }
  }
});

export default GlobalContext;