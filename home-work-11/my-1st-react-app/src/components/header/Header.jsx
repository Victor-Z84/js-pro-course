
import "./Header.scss";

function Header () {

    return (
        <header className="header">
            <a href="/home" className="header__link">Home</a>
            <a href="/home" className="header__link">Portfolio</a>
            <a href="/home" className="header__link">Partners</a>
            <a href="/about" className="header__link">About</a>
        </header>
    )
}

export default Header;