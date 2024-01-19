import './collapse.scss'
import { useState } from 'react'

export default function Collapse(props) {

    const [toggle, setToggle] = useState(false)

    const eventToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className="collapse-container">
            <div className="collapse-title" onClick={eventToggle}>
                <div className="title">
                    <h2>{props.title}</h2>
                    <i className={toggle ? 'fa-solid fa-chevron-up arrow-up' : 'fa-solid fa-chevron-up arrow-down'}></i>
                </div>

                <div className={toggle ? 'collapse-txt' : 'collapse-txt-hidden'}>
                    <p>{props.text}</p>
                </div>

            </div>

        </div >
    )
}