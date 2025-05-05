import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Navigation from './Navigation';
import Footer from './Footer';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../css/login.css';


const Layout = () => {
  const { isLogin } = useContext(AuthContext);
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {isLogin && !isLoginPage && <NavBar />}

      <div style={{ display: 'flex' }}>
        {isLogin && !isLoginPage && <Navigation />}
        
        <div style={{ flex: 1,color:'white'}}>
          <Outlet />
        </div>
      </div>
      {isLogin && !isLoginPage && <Footer/>}
    </>
  );
};

export default Layout;
