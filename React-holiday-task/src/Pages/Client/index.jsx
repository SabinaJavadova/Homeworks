import React from 'react'
import HeaderClient from '../../Layout/Client-header'
import { Outlet } from 'react-router-dom'
const ClientLayout = () => {
  return (
    <div>
      <HeaderClient/>
      <Outlet/>
    </div>
  )
}

export default ClientLayout
