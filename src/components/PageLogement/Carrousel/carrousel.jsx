import './carrousel.scss'
import logements from '../../../../public/logements.json'
import { useParams } from "react-router-dom";

export default function Carrousel() {
    const { id } = useParams();

    const ficheLogement = logements.find((logement) => logement.id === id);
    const imageLogement = ficheLogement.pictures.map((imageLogement) => {
        return (
            <img className="imageCarrousel" src={imageLogement} />
        )
    })

    return (

        <div className="containerCarrousel">
            {imageLogement}
        </div>
    )
}