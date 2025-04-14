import classNames from "classnames"
;
function Button({children, white, animated, text, ...rest}){
    const btnStyle = classNames({
        'btn--white': white,
        'btn--animated':animated,
        'btn--text': text
    });

    console.log(btnStyle);
    return(
        <a className={`btn ${btnStyle}`} {...rest} >{children}</a>
    )
}

export default Button; 