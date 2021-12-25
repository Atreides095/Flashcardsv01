import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Login from './views/login/LoginView';
import Home from './views/home/HomeView';
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
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </AppLayout>
    </Router>
);

export default App;
