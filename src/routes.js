import React from 'react'
// client
const AddNewUser = React.lazy(() => import('./views/client/AddNewUser'))

const routes = [  
  // client Management
  { path: '/client/add-new-user', name: 'Add New Company', element: AddNewUser },

]

export default routes
