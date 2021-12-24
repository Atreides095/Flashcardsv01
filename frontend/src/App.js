import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Login from './views/login/LoginView';
import Decks from './views/decks/DecksView';
import SideBar from './components/sideBar';
import { AppLayout } from './App.styled';

const App = () => (
    <Router>
        <GlobalStyle />
        <AppLayout>
            <Routes>
                <Route path="/login" element="" />
                <Route path="*" element={<SideBar />} />
            </Routes>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/decks" element={<Decks />} />
                <Route path="*" element={<Navigate to="/decks" />} />
            </Routes>
        </AppLayout>
    </Router>
);

export default App;
