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
        <GlobalState>
            <ThemeProvider theme={theme}>
                <Loader />
                <SnackbarMessage />
                <Router>
                    <Layout>
                        <Routes>
                            <Route path='/login' element={<SignIn />} />
                            <Route path='/register' element={<SignUp />} />
                            <Route path='/' element={<Notes />} />
                            <Route path='/create' element={<Create />} />
                            <Route path='/update/:id' element={<Update />} />
                        </Routes>
                    </Layout>
                </Router>
            </ThemeProvider>
        </GlobalState>
    );
}

export default App;
