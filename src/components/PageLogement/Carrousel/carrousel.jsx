import './carrousel.scss'
import { useState } from 'react'

export default function Carrousel(props) {

    const [index, setIndex] = useState(0)

    const nextImg = () => {

        if (index === props.pictures.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }

    }

    const lastImg = () => {

        if (index === 0) {
            setIndex(props.pictures.length - 1)
        } else {
            setIndex(index - 1)
        }

    }

    return (

        <div className="containerCarrousel">
            <img className="imageCarrousel" src={props.pictures[index]} />
            {props.pictures.length > 1 && <>
                <div className="arrow">
                    <i className="fa-solid fa-chevron-left" onClick={lastImg}></i>
                    <i className="fa-solid fa-chevron-right" onClick={nextImg}></i>
                </div>
                <div className="indice">
                    <p><span>{index + 1}</span> / <span>{props.pictures.length}</span></p>
                </div></>
            }

        </div>
    )
}