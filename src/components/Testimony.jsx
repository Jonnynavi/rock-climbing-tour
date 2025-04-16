function Testimony({img, name, heading, children}){
    return(
        <div className="testimony">
            <div className="testimony__content">
                <figure className="testimony__figure">
                    <img className="testimony__img" src={img} />
                    <figcaption className="testimony__caption">{name}</figcaption>
                </figure>
                <h3 className="testimony__heading">{heading}</h3>
                <p className="testimony__paragraph">{children}</p>
            </div>
            
        </div>
    )
}

export default Testimony;