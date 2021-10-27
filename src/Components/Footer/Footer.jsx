import './Footer.css';
import pathSoc from '../../Assets/Images/path.svg';
import inSoc from '../../Assets/Images/in.svg';
import twitterSoc from '../../Assets/Images/twitter.svg';
function Footer () {
   return (
      <footer className="footer">
      <div className="container">
          <div className="footer__left">
              
              <a className="footer__logo" href="./index.html">
                  <svg width="60" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.347 26.122L15.673 0 0 26.122h31.347zM60.082 5.878L44.408 32 28.735 5.878h31.347z" fill="#fff"/></svg>
              </a>
              
              <nav className="nav nav-footer">
                  <ul className="nav__list nav__list-footer">
                      <li className="nav__item nav__item-footer">
                          <a className="nav__link nav__link--avtive-white nav__link-footer" href="#">home</a>
                      </li>
                      <li className="nav__item nav__item-footer">
                          <a className="nav__link nav__link-footer" href="#">about us</a>
                      </li>
                      <li className="nav__item nav__item-footer">
                          <a className="nav__link nav__link-footer" href="#">Create your plan</a>
                      </li>
                  </ul>
              </nav>
          </div>
          <div className="footer__rieght">
              <a className="footer__social-link" href="https://www.facebook.com/" target="blank">
                  <img className="footer__social-icon"
                  src={pathSoc} 
                  alt="path's social icon" 
                  width="24" height="24"
                  />
              </a>
              <a className="footer__social-link" href="https://twitter.com/" target="blank">
                  <img className="footer__social-icon"
                  src={twitterSoc} 
                  alt="twitter's social icon" 
                  width="24" height="24"
                  />
              </a>
              <a className="footer__social-link" href="https://www.instagram.com/" target="blank">
                  <img className="footer__social-icon"
                  src={inSoc} 
                  alt="in's social icon" 
                  width="24" height="24"
                  />
              </a>
          </div>
      </div>
  </footer>
   )
}

export default Footer;
