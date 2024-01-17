import './collapse.scss'

export default function Collapse(props) {
    return (
        <div className="collapse-container">
            <div className="collapse-title">
                <h2>{props.title}</h2>
                <i class="fa-solid fa-chevron-up"></i>
            </div>
            <div className="collapse-txt">
                <p>{props.text}</p>
            </div>
        </div>
    )
}