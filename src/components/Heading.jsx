
function Heading({children, ...rest}){
    return(
        <h2 className="heading-secondary" {...rest}>
            {children}
        </h2>
    )
}

export default Heading;