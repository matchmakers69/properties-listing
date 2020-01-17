import React from 'react';
import cx from 'classnames';
import GlobalContainer from '../styles/GlobalContainer';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <GlobalContainer>
    <div className={cx('container', 'fluid')}>
      <div className={cx('row')}>
        <div className='col-xs-12'>
          <h3 className='titleNotFound'>404 Sorry Page does not exist</h3>
          <Link to='/'>Go back to main page</Link>
        </div>
      </div>
    </div>
  </GlobalContainer>
);

export default NotFound;
