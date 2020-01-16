import React from 'react';

const Layout = ({ ...props }) => {
  return (
    <div role='main' data-test='kaboodle-app' className='main'>
      {props.children}
    </div>
  );
};

export default Layout;
