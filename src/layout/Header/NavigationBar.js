import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Styles.module.scss';

const NavigationBar = () => {
  const [menuLinks, setMenuLinks] = useState([
    {
      id: 1,
      label: 'Hotels'
    },
    {
      id: 2,
      label: 'Guest Houses'
    },
    {
      id: 3,
      label: 'Apartments'
    }
  ]);
  return (
    <nav className={styles.navigationBar}>
      <Link className={styles.navLink} to='/'>
        Home
      </Link>
      {menuLinks.map(link => {
        return (
          <Link
            className={styles.navLink}
            to={`/accomodation-type/${link.id}`}
            key={link.id}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavigationBar;
