import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";

// Styles
import './App.css';

// Components
import Header from './components/Header'

// Pages
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'


function App() {
  return (
    <HashRouter>
      <div className="container dark">
        <div className="app">

          <Header />
          <Routes>
            <Route path="/" exact element={<NotesListPage />} />
            <Route path='/note/:id' element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
