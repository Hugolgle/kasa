import './App.scss'
import { RouterProvider, createBrowserRouter, NavLink, Link, Outlet } from 'react-router-dom'
import Home from './pages/Home/home.jsx'
import About from './pages/About/about.jsx'
import PageError from './pages/Error/error.jsx'
import Header from './components/Header/header.jsx'

const router = createBrowserRouter([
  {
    // path: '/',
    element: <Header />,
    errorElement: <PageError />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App
