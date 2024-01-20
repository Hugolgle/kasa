import './location.scss'
import { useParams } from "react-router-dom";

import logements from '../../../../public/logements.json'

export default function Location() {
    const { id } = useParams();

    const ficheLogement = logements.find((logement) => logement.id === id);


    return <>
        <div className="containerLocation">
            <h3>{ficheLogement.title}</h3>
            <p>{ficheLogement.location}</p>
        </div>
    </>
}