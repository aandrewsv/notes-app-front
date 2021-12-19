import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

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
        secondary: purple,
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path='/' element={<Notes />} />
                    <Route path='/create' element={<Create />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
