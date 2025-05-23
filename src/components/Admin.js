import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from '../Screens/adminLogin.js';
import AdminHome from '../Screens/adminHome.js';
import AdminInfo from '../Screens/AdminInfo.js';
import CustomerManagement from '../Screens/CustomerManage.js';
import SignUp from '../Screens/SignUpAdmin.js';
import Navbar from './navbarAdminPage.js';
import ForgotPassword from '../Screens/ForgotPasswordAdmin.js';  // Ensure correct import
import ResetPassword from '../Screens/ResetPasswordAdmin.js';
import OrderAdmin from '../Screens/OrderAdmin.js'; // Ensure correct import

function Layout() {
  const location = useLocation();
  const hideNavbarRoutes = ['/createadmin', '/loginadmin', '/forgotpasswordadmin', '/resetpasswordadmin/:token']; // Ensure these paths match exactly

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <div style={{ marginTop: "5rem" }}>
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/adminInfo" element={<AdminInfo />} />
          <Route path="/customers" element={<CustomerManagement />} />
          <Route path="/order" element={<OrderAdmin />} />
          <Route path="/loginadmin" element={<Login />} />
          <Route path="/createadmin" element={<SignUp />} />
          <Route path="/forgotpasswordadmin" element={<ForgotPassword />} />
          <Route path="/resetpasswordadmin/:token" element={<ResetPassword />} />
        </Routes>
      </div>
    </>
  );
}

function Admin() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default Admin;