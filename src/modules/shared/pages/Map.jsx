import React from "react";
import { connect } from 'react-redux';
import Actions from "../state/actions";
import _ from 'lodash';

const mapStateToProps = (state) => {
  return {
    countries:_.values(state.shared.countries || {})
  };
};

class Map extends React.Component{

  componentDidMount(){
    this.props.dispatch(Actions.fetchCountries());
  }

  render() {

    const countries = this.props.countries.map((country,index) => {
      return (
        <p key={index}>{country.name} - {country.users}</p>
      );
    });

    return (
      <div>
          Mappa
          {countries}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Map);
