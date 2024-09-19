import React, { useEffect, useState } from 'react'

import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import Cookies from 'js-cookie'
import UserPool from "./../UserPool";
const DefaultLayout = () => {
  const[status,setStatus]=useState(true);
  const getSession= async () => {
    return await new Promise((resolve, reject) => {
        const user = UserPool.getCurrentUser();
        
    });
};

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
