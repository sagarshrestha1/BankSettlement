
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
import Settlement from './pages/RecurringSettlement';
import AddRecurringSettlements from './pages/AddRecurringSettlements';
import EditRecurringSettlements from './pages/EditRecurringSettlements';
import { AuthContext } from './context/AuthContext';
import { useEffect, useState } from 'react';
import RoleManagement from './pages/RoleManagement';
import './css/rolemanagement.css';
import AddRole from './pages/AddRole';
import EditRole from './pages/EditRole';
import UserManagement from './pages/UserManagement';
import AddUsers from './pages/AddUsers';
import EditUser from './pages/EditUser';
import RecurringSettlements from './pages/RecurringSettlement';
import ManualSettlement from './pages/ManualSettlement';
import AddManualSettlement from './pages/AddManualSettlement';
import EditManualSettlement from './pages/EditManualSettlement';


function App() {
  const [isLogin, setIsLogin] = useState(() => {
    return localStorage.getItem('isLogin') === 'true';
  });
  useEffect(() => {
    localStorage.setItem('isLogin', isLogin);
  }, [isLogin]);
  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<Favorities />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/linkbank" element={<LinkedBankAccount />} />
          <Route path="/linkbank/add" element={<AddBank />} />
          <Route path="/linkbank/edit" element={<EditBank />} />
          <Route path="/recurringsettlement" element={<RecurringSettlements />} />
          <Route path="/recurringsettlement/addrecurringsettlement" element={<AddRecurringSettlements />} />
          <Route path="/recurringsettlement/editrecurringsettlement" element={<EditRecurringSettlements />} />
          <Route path="/manualsettlement" element={<ManualSettlement />} />
          <Route path="/manualsettlement/addmanualsettlement" element={<AddManualSettlement />} />
          <Route path="/manualsettlement/editmanualsettlement" element={<EditManualSettlement />} />
          <Route path="/rolemanagement" element={<RoleManagement />}/>
          <Route path="/rolemanagement/addrole" element={<AddRole/>}/>
          <Route path="/rolemanagement/editrole" element={<EditRole/>}/>
          <Route path="/usermanagement" element={<UserManagement/>}/>
          <Route path="/usermanagement/addUser" element={<AddUsers/>}/>
          <Route path="/usermanagement/editUser" element={<EditUser/>}/>
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;



