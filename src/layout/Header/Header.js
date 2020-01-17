import React from 'react';
import styles from './Styles.module.scss';
import NavigationBar from './NavigationBar';

const Header = () => (
  <header className={styles.mainHeader}>
    <NavigationBar />
  </header>
);

export default Header;
