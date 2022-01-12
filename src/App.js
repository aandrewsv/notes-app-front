import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import GlobalState from './context/GlobalState';
import Loader from './components/Loader';
import SnackbarMessage from './components/SnackbarMessage';
import Notes from './pages/Notes';
import Create from './pages/Create';
import Update from './pages/Update';
import Layout from './components/Layout';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import ResetPasswordConfirm from './pages/auth/ResetPasswordConfirm';
import ResetPassword from './pages/auth/ResetPassword';
import Activate from './pages/auth/Activate';
import { Provider } from 'react-redux';
import store from './store';

const theme = createTheme({
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
    palette: {
        secondary: lightBlue,
    },
});

function App() {
    return (
        <Provider store={store}>
            <GlobalState>
                <ThemeProvider theme={theme}>
                    <Loader />
                    <SnackbarMessage />
                    <Router>
                        <Layout>
                            <Routes>
                                <Route path='/login' element={<SignIn />} />
                                <Route path='/register' element={<SignUp />} />
                                <Route
                                    path='/reset_password'
                                    element={<ResetPassword />}
                                />
                                <Route
                                    path='/password/reset/confirm/:uid/:token'
                                    element={<ResetPasswordConfirm />}
                                />
                                <Route
                                    path='/activate/:uid/:token'
                                    element={<Activate />}
                                />
                                <Route path='/' element={<Notes />} />
                                <Route path='/create' element={<Create />} />
                                <Route
                                    path='/update/:id'
                                    element={<Update />}
                                />
                            </Routes>
                        </Layout>
                    </Router>
                </ThemeProvider>
            </GlobalState>
        </Provider>
    );
}

export default App;
