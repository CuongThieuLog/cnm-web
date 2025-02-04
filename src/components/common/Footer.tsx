import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Link to="/" className="logo-font">
          CNM
        </Link>

        <span className="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed
          under MIT.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
