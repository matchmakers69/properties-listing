import React, { Component } from 'react';
import { getAccomodationData } from '../components/Accomodation/services/accomodation';
import { getAccomodationTypeByName } from '../components/Accomodation/services/accomodationType';

export const AccomodationContext = React.createContext();

export class AccomodationProvider extends Component {
  _isMounted = false;
  state = {
    accomodation: [],
    isLoading: true,
    accomodationTypeId: null
  };

  fetchAccomodation = async () => {
    try {
      const response = await getAccomodationData();

      if (this._isMounted) {
        this.setState({
          accomodation: response,
          isLoading: false
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this._isMounted = true;
    this.fetchAccomodation();
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  getAccomodationTypesById = id => {
    const { accomodation } = this.state;
    const accomodationTypes = getAccomodationTypeByName(accomodation);
    let accomodationType = null;
    accomodationType = accomodationTypes.find(
      item => item.id === parseInt(id, 10)
    );
    return accomodationType;
  };

  render() {
    const { accomodation } = this.state;
    const accomodationTypes = getAccomodationTypeByName(accomodation);

    return (
      <AccomodationContext.Provider
        value={{
          ...this.state,
          accomodationTypes: accomodationTypes,
          getAccomodationTypesById: this.getAccomodationTypesById
        }}
      >
        {this.props.children}
      </AccomodationContext.Provider>
    );
  }
}
