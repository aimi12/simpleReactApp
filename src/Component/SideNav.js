import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return (
        <div
          style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
        >
          <CDBSidebar textColor="#fff" backgroundColor="#333">
    
            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink exact to="/" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/Profile" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/Profile/changepwsd" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="user">Change Password</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/Product" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="table">
                    Products
                  </CDBSidebarMenuItem>
                </NavLink>
    
              </CDBSidebarMenu>
            </CDBSidebarContent>

          </CDBSidebar>
        </div>
      );
};

export default SideNav;

