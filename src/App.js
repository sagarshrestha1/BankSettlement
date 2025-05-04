
import './App.css';
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import './css/sidebar.css';
import Favorities from './pages/Favorites';
import Login from './components/Login';
import './css/login.css';
import Dashboard from './pages/Dashboard';
import './css/navbar.css';
import './css/dashboard.css'
import LinkedBankAccount from './pages/LinkedBankAccountPage';
import './css/linkedbank.css';
import Breadcrumb from './components/BreadCrum';
import AddBank from './pages/AddBank';
import EditBank from './pages/EditBank';
import './css/addbank.css';
import Navigation from './components/Navigation';
import Layout from './components/Layout';
import Settlement from './pages/Settlement';
import AddSettlements from './pages/AddSettlements';
import EditSettlements from './pages/EditSettlements';
function App() {
  return (

    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<Favorities />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/linkbank" element={<LinkedBankAccount />} />
        <Route path="/linkbank/add" element={<AddBank />} />
        <Route path="/linkbank/edit" element={<EditBank />} />
        <Route path="/settlements" element={<Settlement />}/>
        <Route path="/settlements/addsettlement" element={<AddSettlements />}/>
        <Route path="/settlements/editsettlement" element={<EditSettlements />}/>
        

      </Route>
    </Routes>
  );
}

export default App;



