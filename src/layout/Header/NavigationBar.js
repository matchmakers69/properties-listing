import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Styles.module.scss';

const NavigationBar = ({ accomodationTypes, isLoading }) => {
  if (isLoading) {
    return <p>Navigation is loading...</p>;
  }
  return (
    <nav data-test='navigationBar' className={styles.navigationBar}>
      <Link className={styles.navLink} to='/'>
        All properties
      </Link>
      {accomodationTypes.map(link => {
        return (
          <Link
            data-test='navigationLinks'
            className={styles.navLink}
            to={`/accomodation-type/${link.id}`}
            key={link.id}
          >
            {link.type}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavigationBar;
