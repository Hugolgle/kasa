import './host.scss'
import { useParams } from "react-router-dom";

import logements from '../../../../public/logements.json'

export default function Location() {
    const { id } = useParams();

    const ficheLogement = logements.find((logement) => logement.id === id);


    return <>
        <div className="containerHost">
            <p>{ficheLogement.host.name}</p>
            <img src={ficheLogement.host.picture}></img>
        </div>
    </>
}