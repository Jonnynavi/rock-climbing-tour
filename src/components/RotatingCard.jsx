function RotatingCard({title, details, cardNumber}){

    const cardDetails = () => {
        return details.map((item) => {
            return <li>{item}</li>
        })
    }
    const cardNum = `card--${cardNumber}`;
    return(
        <div className={`card ${cardNum}`}>
            <div className="card__inner">
                <div className="card__side card--front">
                    <div className={`card__background ${cardNum}__background`}>
                    </div>
                    <h4 className="card__title"><span className={`card__title--span ${cardNum}__title--span`}>{title}</span></h4>
                    <div className="card__details">
                        <ul>
                            {cardDetails()}
                        </ul>
                    </div>
                </div>
                <div className={`card__side ${cardNum}--back`}>
                    
                </div>
            </div>
        </div>
    )
}

export default RotatingCard;