import React from "react";
import { connect } from 'react-redux';
import Actions from "../state/actions";

const mapStateToProps = (state) => {
  return state
};

class Map extends React.Component{

  componentDidMount(){
    this.props.dispatch(Actions.fetchCountries());
  }

  render() {
    return (
      <div>
          Mappa
      </div>
    );
  }
}

export default connect(mapStateToProps)(Map);
