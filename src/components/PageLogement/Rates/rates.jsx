import './rates.scss'
import { useParams } from "react-router-dom";

import logements from '../../../../public/logements.json'

export default function Rates() {
    const { id } = useParams();

    const ficheLogement = logements.find((logement) => logement.id === id);


    return <>
        <div className="containerRates">
            <i className="fa-solid fa-star"></i>
            <h3>{ficheLogement.rating}</h3>
        </div>
    </>
}