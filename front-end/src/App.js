import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppProvider from './context/providers/appProvider';
import Routes from './Routes/Routes';

function App() {
    return (
        <AppProvider>
            <Router>
                <Header />
                <Routes />
                <Footer />
            </Router>
        </AppProvider>
    );
}
export default App;
