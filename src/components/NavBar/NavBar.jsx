import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navDefinition = '1,/,books]-[2,/categories,categories';
  const navElements = navDefinition.split(']-[');
  const navItems = navElements.map((navItem) => {
    const navItemConfig = navItem.split(',');
    const [id, path, name] = navItemConfig;

    return (
      <li key={id}>
        <NavLink
          to={path}
          className="appLink"
        >
          {name}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul>
        {navItems}
      </ul>
    </nav>
  );
};

export default NavBar;
