import { useLocation } from 'react-router-dom';
import FourZeroFour from '../../Common/404';
import Logout from '../../Common/Logout';
import CardsManagement from './CardsManagement/CardsManagement';
import ContactMessages from './ContactMessages/ContactMessages';
import Dashboard from './Dashboard/Dashboard';
import RequestsManagement from './RequestsManagement/RequestsManagement';
import Setting from './Setting/Setting';
import UsersManagement from './UsersManagement/UsersManagement';

function MainContent() {
    const query = new URLSearchParams(useLocation().search);
    if (!query.get('tab')) {
        return <Dashboard />;
    }
    switch (query.get('tab')) {
        case 'dashboard':
            return <Dashboard />;

        case 'cards-management':
            return <CardsManagement />;
        case 'requests-management':
            return <RequestsManagement />;
        case 'users-management':
            return <UsersManagement />;
        case 'contact-messages':
            return <ContactMessages />;
        case 'setting':
            return <Setting />;
        case 'logout': {
            return <Logout isAdmin />;
        }
        default:
            return <FourZeroFour />;
    }
}

export default MainContent;
