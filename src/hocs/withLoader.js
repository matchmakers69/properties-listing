import React, { useContext } from 'react';
import { AccomodationContext } from '../context/AccomodationContext';
import PageLoader from '../components/Loader/PageLoader';

const withLoader = Component => props => {
  const { isLoading } = useContext(AccomodationContext);
  if (isLoading) {
    return <PageLoader isLoading={true} />;
  }
  return <Component {...props} />;
};

export default withLoader;
