import { Outlet } from 'react-router';

import Navbar from '../components/elements/navbar';
import Footer from '../components/elements/footer';

const Layout = () =>
  <div>
    <div className="container">
      <Navbar />
    </div>
    <Outlet />
    <div className="container">
      <Footer />
    </div>
  </div>;

export default Layout;
