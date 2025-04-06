import React from 'react'
import Header from './components/Header'
import './App.css'
import { Outlet } from 'react-router-dom'
export default function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
