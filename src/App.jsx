import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { RouterProvider, createBrowserRouter, NavLink, Link, Outlet } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: 'home',
        element: <div>Accueil</div>
      },
      {
        path: 'about',
        element: <div>A propos</div>
      }
    ]
  }
])

function PageError() {
  return <>
    <h1>Une erreur est survenue !</h1>
  </>
}

function Root() {
  return <>
    <header>
      <nav>
        <NavLink to="/home">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
    <div className='container my-4'><Outlet /></div >
  </>
}

function App() {
  return <RouterProvider router={router} />
}

export default App
