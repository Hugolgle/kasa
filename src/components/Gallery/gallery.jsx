import './gallery.scss'
import Card from '../Card/card'
import { Link } from 'react-router-dom'


export default function Gallery(props) {
    return (
        <div className="container-logement">
            {
                props.cards.map((card) => {
                    return <>
                        <Link to={`/logement/${card.id}`} key={card.id}>
                            <Card image={card.cover} name={card.title} />
                        </Link >
                    </>


                })}
        </div >
    )
}

