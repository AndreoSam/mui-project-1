import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "../layout/header/Header";
// import Footer from "../layout/footer/Footer";
import Registration from "../Auth/Registration";
import LoginRegistration from "../Auth/LoginRegistration";
import Profile from "../Auth/Profile";
// import MuiDrawer from "../components/MuiDrawer";
// import Registration2 from "../Auth/Registration2";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="" element={<MuiButton />} /> */}
        <Route path="" element={<Registration />} />
        <Route path="login" element={<LoginRegistration />} />
        <Route path="profile" element={<Profile />} />
        {/* <Route path="drawer" element={<MuiDrawer />} /> */}
        {/* <Route path="" element={<Registration2 />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default Routing;
