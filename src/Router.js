import React from 'react';
import { Route, Routes } from 'react-router';
import cookie from 'cookie';
import Listing from './containers/Listing';
import Details from './containers/Details';
import Login from './containers/Login';
import AddListing from './containers/AddListing';
import NavBar from './components/NavBar/NavBar';

import { Link } from "react-router-dom";
import StatusBar from './components/StatusBar/StatusBar';
// const navigate = useNavigate();

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  console.log("cookies", cookies);

  return cookies["loggedIn"] ? true : false;
}

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;

  return checkAuth() === true ? <Component {...rest} /> : <Link to="/login" />;
};

const Router = () => {
  return (
    <>
      <NavBar />
      <StatusBar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/business/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addlisting" element={<ProtectedRoute component={AddListing} />} />
      </Routes>
    </>
  )
}

export default Router;