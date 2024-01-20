import './gallery.scss'
import logements from '../../../public/logements.json'
import Card from '../Card/card'
import { RouterProvider, createBrowserRouter, NavLink, Link, Outlet } from 'react-router-dom'


export default function Gallery() {
    return (
        <div className="container-logement">
            {
                logements.map((logement) => {
                    return <>
                        <Link to={`/logement/${logement.id}`}>
                            <Card image={logement.cover} name={logement.title} />
                        </Link >
                    </>


                })}
        </div >
    )
}

