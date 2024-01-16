import './header.scss'
import { NavLink, Outlet } from 'react-router-dom'


export default function Header() {
    return <>
        <header>
            <img src="./src/assets/images/logo.png" alt="logo" />
            <nav>
                <NavLink to="/home">Accueil</NavLink>
                <NavLink to="/about">A propos</NavLink>
            </nav>
        </header>
        <div className='container my-4'><Outlet /></div >
    </>
}