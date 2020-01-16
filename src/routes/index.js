import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccomodationTypes from '../views/AccomodationTypes';
import AccomodationTypesDetails from '../components/Accomodation/AccomodationDetails/AccomodationTypesDetails';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={AccomodationTypes} />
      <Route
        exact
        path='/accomodation-type/:id'
        component={AccomodationTypesDetails}
      />
    </Switch>
  );
};
