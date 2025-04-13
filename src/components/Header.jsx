function Header(){
    return(
        <header className="header">
            <div className="header__logo-box">
                <img src="./images/Logo.png" alt="logo" className="header__logo" />
            </div>
            <div className="header__textbox">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">We Answer</span>
                    <span className="heading-primary--sub">Where the wild calls</span>
                </h1>
                <a href="#" className="btn btn--white">Discover our tours</a>
            </div>

        </header>
    )
}

export default Header;