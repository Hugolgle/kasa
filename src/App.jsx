import './App.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/home.jsx'
import About from './pages/About/about.jsx'
import PageError from './pages/PageError/pageError.jsx'
import Logement from './pages/Logement/logement.jsx'
import Header from './components/Header/header.jsx'

const router = createBrowserRouter([
  {
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
      },
      {
        path: 'logement/:id',
        element: <Logement />
      }
    ]
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App