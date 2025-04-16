import classNames from "classnames"
;
function Button({children, white, orange, animated, text, className, ...rest}){
    const btnStyle = classNames({
        'btn__round btn__round--white': white,
        'btn__round btn__round--orange': orange,
        'btn--animated':animated,
        'btn--text': text
    });

    console.log(btnStyle);
    return(
        <a className={`btn ${btnStyle} ${className}`} {...rest} >{children}</a>
    )
}

export default Button; 