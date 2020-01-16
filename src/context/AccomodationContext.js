import React, { Component } from 'react';
import { getAccomodationData } from '../components/Accomodation/services/accomodation';
import { getAccomodationTypeByName } from '../components/Accomodation/services/accomodationType';

export const AccomodationContext = React.createContext();

export class AccomodationProvider extends Component {
  _isMounted = false;
  state = {
    accomodation: [],
    isLoading: true
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

  render() {
    const { accomodation } = this.state;

    const accomodationTypes = getAccomodationTypeByName(accomodation);
    return (
      <AccomodationContext.Provider
        value={{
          ...this.state,
          accomodationTypes: accomodationTypes
        }}
      >
        {this.props.children}
      </AccomodationContext.Provider>
    );
  }
}
