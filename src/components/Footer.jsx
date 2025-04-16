import logo from "../images/Logo.png";

function Footer(){
    return(
        <footer className="footer">
            <img src={logo} className="footer__logo" />
            <div className="footer__links">
                <ul className="footer__links--left">
                    <li>Company</li>
                    <li>Contact us</li>
                    <li>Careers</li>
                    <li>Private Policy</li>
                    <li>Terms</li>
                </ul>
                <div className="footer__links--right">
                    <p> Built By Jonathan Torres Copyright ©</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;