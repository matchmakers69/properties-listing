import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Styles.module.scss';
import IconSpinner from './IconSpinner';

const PageLoader = props => {
  const { children, isLoading } = props;
  if (isLoading) {
    return (
      <div
        className={cx(
          styles.preloaderContent,
          `${isLoading ? styles.loaderVisible : styles.loaderNonVisible}`
        )}
      >
        <div className={styles.preloaderInner}>
          <div className={styles.spinnerWrapper}>
            <IconSpinner />
          </div>
        </div>
      </div>
    );
  }
  return children;
};

PageLoader.propsTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default PageLoader;
