import './carrousel.scss'
import logements from '../../../../public/logements.json'
import { useParams } from "react-router-dom";
import arrowLeft from '../../../assets/images/arrow_Left.png'
import arrowRight from '../../../assets/images/arrow_Right.png'
import { useState } from 'react'

export default function Carrousel() {
    const { id } = useParams();

    const ficheLogement = logements.find((logement) => logement.id === id);

    const [index, setIndex] = useState(0)

    const nextImg = () => {
        setIndex(index + 1)
        if (index === ficheLogement.pictures.length - 1)
            setIndex(0)
    }

    const lastImg = () => {
        setIndex(index - 1)
        if (index === 0)
            setIndex(ficheLogement.pictures.length - 1)
    }

    return (

        <div className="containerCarrousel">
            <img className="imageCarrousel" src={ficheLogement.pictures[index]} />
            <div className="arrow">
                <img src={arrowLeft} alt="arrowLeft" onClick={lastImg} />
                <img src={arrowRight} alt="arrowRight" onClick={nextImg} />
            </div>
            <div className="indice">
                <p><span>{index + 1}</span> / <span>{ficheLogement.pictures.length}</span></p>
            </div>
        </div>
    )
}