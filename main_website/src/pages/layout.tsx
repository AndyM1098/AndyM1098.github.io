import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}

export default Layout;