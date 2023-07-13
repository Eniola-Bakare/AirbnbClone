import starIcon from '../assets/starImg.svg'


export default function Card(props) {
    return (
        <div className="card">
            <img src={`.${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src={starIcon} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}