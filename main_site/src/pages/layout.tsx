import NavbarMain from '../components/Navbar/NavbarMain';
import FooterMain from '../components/Footer/FooterMain';

import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <NavbarMain />
      <main className="container mt-4">
        <Outlet /> 
      </main>
      <FooterMain />
    </>
  );
}

export default Layout;