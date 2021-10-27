import './Header.css';
import logo from '../../Assets/Images/logo.svg';
import plus from '../../Assets/Images/plus.svg';
import minus from '../../Assets/Images/minus.svg';


function Header() {
   return (

      <header className="header">

        <div className="container">

            <a className="header__logo" href="./index.html">
                <img
                className="header__img"
                src={logo}
                alt="Site's logo"
                width="60" height="32" 
                />
            </a>
            
                <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a className="nav__link nav__link--active" href="index.html">home</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="abuot.html">PORTFOLIO</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="completed.html">CONTACT ME</a>
                    </li>
                </ul>
               </nav>
            <button className="hamburger" type="button">
                <img className="hamburger__menu"
                src={plus}
                alt="hambuerger menu" 
                width="24" height="15" />
                
                <img className="hamburger__exit"
                src={minus}
                alt="hambuerger exit" 
                width="24" height="15" />
            </button>
        </div>
    </header>

   )
}

export default Header;