import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'

export const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <LandingPage/>
    </div>
  )
}
