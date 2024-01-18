import './gallery.scss'
import logements from '../../../public/logements.json'
import Card from '../Card/card'

export default function Gallery() {
    return (
        <div className="container-logement">
            {
                logements.map((logement) => {
                    return (
                        <Card image={logement.cover} name={logement.title} />
                    );
                })}
        </div>
    )
}

