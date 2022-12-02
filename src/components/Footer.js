import { Link } from 'react-router-dom';

const Footer = (props) => {
  <footer class="footer">
    <nav>
      <ul>
        <li class="footer__menu-item">
          <Link
            className={`footer__menu-link ${
              props.isPlayActive ? 'active' : ''
            }`}
            to="/play/1"
          >
            A jugar
          </Link>
        </li>

        <li class="footer__menu-item">
          <Link
            className={`footer__menu-link ${
              props.isInstructionActive ? 'active' : ''
            }`}
            to="/instructions/2"
          >
            ¿Cómo se juega?
          </Link>
        </li>
        <li class="footer__menu-item">
          <Link
            className={`footer__menu-link ${
              props.isOptionsActive ? 'active' : ''
            }`}
            to="/options/3"
          >
            Más opciones
          </Link>
        </li>
      </ul>
    </nav>
    <small class="footer__copy">© Adalab</small>
  </footer>;
};
export default Footer;
