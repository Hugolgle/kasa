import './tags.scss'
import { useParams } from "react-router-dom";

import logements from '../../../../public/logements.json'

export default function Location() {
    const { id } = useParams();

    const ficheLogement = logements.find((logement) => logement.id === id);

    const tag = ficheLogement.tags.map((tag) => {
        return <>
            <p>{tag}</p>
        </>

    })
    return <>
        <div className='containerTags'>
            {tag}
        </div>
    </>
}