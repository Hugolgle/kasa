import './banner.scss'

export default function Banner(props) {
    return (
        <div className="banner-container">
            <div className="banner-img">
                <img src={props.img} />
            </div>
            <div className="banner-title">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}