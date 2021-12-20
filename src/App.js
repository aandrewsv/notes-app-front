import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import Update from './pages/Update';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import Layout from './components/Layout';

const theme = createTheme({
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
    palette: {
        primary: {
            main: '#fefefe',
        },
        secondary: lightBlue,
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Notes />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/update/:id' element={<Update />} />
                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App;
