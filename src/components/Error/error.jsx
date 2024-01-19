import './error.scss'
import { RouterProvider, createBrowserRouter, NavLink, Link, Outlet } from 'react-router-dom'
export default function PageError() {
    return <>
        <div className="containerError">
            <h1 className='error'>404</h1>
            <p className='error'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='error' to='/'>
                Retourner a la page d'accueil
            </Link>
        </div>

    </>


}