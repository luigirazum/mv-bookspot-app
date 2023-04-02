import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const AppTitle = () => (
  <Link
    to="/"
    className="appTitle"
  >
    BookSP
    <Logo />
    T
  </Link>
);

export default AppTitle;
