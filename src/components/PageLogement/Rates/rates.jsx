import './rates.scss'

export default function Rates(props) {

    const nbStars = [1, 2, 3, 4, 5];
    return (
        <div className="containerRates">
            {nbStars.map((star) =>
                props.rating >= star ? (
                    <i className="fa-solid fa-star red" key={star}></i>
                ) : (
                    <i className="fa-solid fa-star grey" key={star}></i>
                )
            )}
        </div>
    );
}