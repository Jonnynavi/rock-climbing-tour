import Button from  './Button';
import logo from '../images/Logo.png';

function Header(){
    return(
        <header className="header">
            <div className="header__logo-box">
                <img src={logo} alt="logo" className="header__logo" />
            </div>
            <div className="header__textbox">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Elevate</span>
                    <span className="heading-primary--sub"> your perspective</span>
                </h1>
                <Button href="#" white animated>Discover our tours</Button>
            </div>
        </header>
    )
}

export default Header;