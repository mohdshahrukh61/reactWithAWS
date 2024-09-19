import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavGroup,
    name: 'New User',
    items: [
      {
        component: CNavItem,
        name: 'Add New User',
        to: '/client/add-new-user',
      },
      
    ],
    id:"user",
  },
  
  
 
]

export default _nav
