import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccomodationTypes from '../views/AccomodationTypes';
import AccomodationTypesDetails from '../components/Accomodation/AccomodationDetails/AccomodationTypesDetails';
import SingleAccomodation from '../components/Accomodation/AccomodationType/SingleAccomodation';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={AccomodationTypes} />
      <Route
        exact
        path='/accomodation-type/:id'
        component={AccomodationTypesDetails}
      />
      <Route
        exact
        path='/accomodation-type/accomodation/:id'
        component={SingleAccomodation}
      />
    </Switch>
  );
};
