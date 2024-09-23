import React from 'react';
import './App.css';
import Homepage from './Homepage/Homepage';
import {Routes, Route} from 'react-router-dom';
import NavBar from './Component/NavBar';
import NoMatch from './Component/noMatch';
import Breadcrumbs from './Component/Breadcrumbs';
import Login from './Login/Login';
import ForgotPassword from './PasswordManagement/ForgotPassword';
import Profile from './Profile/Profile';
import Products from './Products/Products';
import ProductDetails from './Products/ProductDetails';
import ChangePassword from './PasswordManagement/ChangePassword';
import UnAuthorized from './Component/UnAuthorized';
import { UserAuthContextProvider } from './userAuth/userAuthContext';
import ProtectedRoute from './Login/ProtectedRoute';

function App() {

  return (
   <div className="App">
      <UserAuthContextProvider>
        <NavBar/>
        <Breadcrumbs/>
        <Routes>
          {/* Authorized */}
          <Route path="/Profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
          <Route path="/Profile/changepwsd" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>}/>
          <Route path="/Product" element={<ProtectedRoute><Products /></ProtectedRoute>}/>
          <Route path="/Product/:id"  element={<ProtectedRoute><ProductDetails /></ProtectedRoute>}/>

          <Route path = "/" element={<Homepage/>}></Route>
          <Route path = "/Dashboard" element={<Homepage/>}></Route>
          <Route path = "*" element={<NoMatch/>}></Route>
          <Route path = "/fgtpwsd" element={<ForgotPassword/>}></Route>
          <Route path = "/SignIn" element={<Login/>}></Route>
          <Route path = "/unauthorized" element={<UnAuthorized/>}></Route>
        </Routes>
      </UserAuthContextProvider>
 
   </div>
  );
}

export default App;
