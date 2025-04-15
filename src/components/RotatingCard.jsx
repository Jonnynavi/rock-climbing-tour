function RotatingCard({title, details, cardNumber}){

    const cardDetails = () => {
        return details.map((item) => {
            return <li>{item}</li>
        })
    }

    return(
        <div className={`card card--${cardNumber}`}>
            <div className="card__front">
                <div className="card__background">
                </div>
                <h4 className="card__title"><span className="card__title--span">{title}</span></h4>
                <div className="card__details">
                    <ul>
                        {cardDetails()}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RotatingCard;