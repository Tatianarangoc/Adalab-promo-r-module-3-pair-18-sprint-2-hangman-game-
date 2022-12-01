import { Link } from 'react-router-dom';

const Footer = () => {
  <footer class="footer">
    <nav>
      <ul>
        <li class="footer__menu-item">
          <Link className="footer__menu-link" to="/">
            A jugar
          </Link>
        </li>

        <li class="footer__menu-item">
          <Link className="footer__menu-link active" to="/">
            ¿Cómo se juega?
          </Link>
        </li>
        <li class="footer__menu-item">
          <Link className="footer__menu-link" to="/">
            Más opciones
          </Link>
        </li>
      </ul>
    </nav>
    <small class="footer__copy">© Adalab</small>
  </footer>;
};
export default Footer;
