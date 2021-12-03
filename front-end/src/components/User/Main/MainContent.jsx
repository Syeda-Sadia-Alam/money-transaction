import { useLocation } from 'react-router-dom';
import FourZeroFour from '../../Common/404';
import Logout from '../../Common/Logout';
import AccountDetails from './AccountDetails/AccountDetails';
import Cards from './Cards/Cards';
import Dashboard from './Dashboard/Dashboard';
import Deposit from './Deposit/Deposit';
import EarnMoney from './EarnMoney/EarnMoney';
import Setting from './Setting/Setting';
import Transfer from './Transfer/Transfer';
import Withdraw from './Withdraw/Withdraw';

function MainContent() {
    const query = new URLSearchParams(useLocation().search);
    if (!query.get('tab')) {
        return <Dashboard />;
    }
    switch (query.get('tab')) {
        case 'dashboard':
            return <Dashboard />;
        case 'account-details':
            return <AccountDetails />;
        case 'deposit-cash':
            return <Deposit />;
        case 'withdraw-cash':
            return <Withdraw />;
        case 'transfer-money':
            return <Transfer />;
        case 'earn-money':
            return <EarnMoney />;
        case 'cards':
            return <Cards />;
        case 'setting':
            return <Setting />;
        case 'logout': {
            return <Logout />;
        }
        default:
            return <FourZeroFour />;
    }
}

export default MainContent;
