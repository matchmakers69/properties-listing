import React from 'react';
import styles from './Styles.module.scss';
import NavigationBar from './NavigationBar';
import { AccomodationContext } from '../../context/AccomodationContext';

const Header = () => (
  <AccomodationContext.Consumer>
    {({ accomodationTypes, isLoading }) => (
      <header className={styles.mainHeader}>
        <NavigationBar
          accomodationTypes={accomodationTypes}
          isLoading={isLoading}
        />
      </header>
    )}
  </AccomodationContext.Consumer>
);

export default Header;
