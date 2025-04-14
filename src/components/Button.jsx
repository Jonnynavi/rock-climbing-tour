import classNames from "classnames"
;
function Button({children, white, animated, orange, ...rest}){
    const btnStyle = classNames({
        'btn--white': white,
        'btn--animated':animated,
        'btn--orange': orange
    });

    console.log(btnStyle);
    return(
        <a className={`btn ${btnStyle}`} {...rest} >{children}</a>
    )
}

export default Button;