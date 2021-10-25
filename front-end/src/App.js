import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AdminLayout from './components/Admin/Layout/Layout';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import providers from './context/providers';
import Routes from './Routes';

const { UserProvider } = providers;

const RenderRoutes = () => {
    const location = useLocation();
    if (location.pathname.slice(1, 6) === 'admin') {
        return (
            <AdminLayout>
                <Routes />
            </AdminLayout>
        );
    }
    return (
        <>
            <Header />
            <Routes />
            <Footer />
        </>
    );
};

function App() {
    return (
        <UserProvider>
            <Router>
                <RenderRoutes />
            </Router>
        </UserProvider>
    );
}
export default App;
