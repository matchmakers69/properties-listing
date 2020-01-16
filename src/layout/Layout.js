import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div role='main' data-test='kaboodle-app' className='main'>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array])
};

export default Layout;
