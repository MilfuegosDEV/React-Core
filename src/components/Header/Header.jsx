import ReactLogo from '../../assets/react-core-concepts.png';
import './Header.css';

function Header({ descriptions }) {
  const genRandomDescription = (x) =>
    x[Math.floor(Math.random() * (x.length + 1))];

  return (
    <header>
      <img
        src={ReactLogo}
        alt='react-logo'
        className='logo'
      />
      <h1>React Essentials</h1>
      <p>
        {genRandomDescription(descriptions)} React Concepts you'll need for
        almost any you going to build!
      </p>
    </header>
  );
}

export default Header;
