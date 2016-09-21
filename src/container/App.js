import React from "react";
import { connect } from 'react-redux';
import { Fragment } from 'redux-little-router';
import Home from '../modules/shared/pages/Home';
import Map from '../modules/shared/pages/Map';

const style = {
  fontFamily:'Open Sans',
  fontSize: '90%'
};

export class App extends React.Component{

  render() {
    return (
      <div style={style}>
        <Fragment forRoute='/'>
          <Home></Home>
        </Fragment>
        <Fragment forRoute="/map">
          <Map></Map>
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps)(App);
