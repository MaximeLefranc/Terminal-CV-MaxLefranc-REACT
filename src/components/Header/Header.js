import PropTypes from 'prop-types';
import './styles.scss';

function Header({ lang }) {
  return (
    <p className="header">
      {
        (lang === 'fr')
          ? 'Bienvenue sur mon CV en ligne! Tape \'help\' pour découvrir comment démarrer.'
          : 'Welcome to my online CV! Type \'help\' to discover how to start.'
      }
    </p>
  );
}

Header.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Header;
