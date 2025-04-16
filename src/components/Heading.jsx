
function Heading({children,className, ...rest}){
    return(
        <h2 className={`heading-secondary ${className}`} {...rest}>
            {children}
        </h2>
    )
}

export default Heading;