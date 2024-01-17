import './card.scss'

export default function Card(props) {
    return (
        <div className="card-container">
            <div className="card">
                <div className="image">
                    <img src={props.image} alt={props.name} />
                </div>
                <div className="txt">
                    <p>{props.name}</p>
                </div>

            </div>
        </div>
    )
}