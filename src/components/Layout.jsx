import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Navigation from './Navigation';
import Footer from './Footer';


const Layout = () => (
  <>
    <NavBar />
    <div style={{ display: 'flex' }}>
      <Navigation />
      <div style={{ flex: 1, padding: '20px' }}>
        <Outlet /> 
      </div>
    </div>
    <Footer />
  </>
);

export default Layout;
