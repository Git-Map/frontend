import React from "react";
import { Link, Fragment } from 'redux-little-router';
import Home from '../modules/shared/pages/Home';
import Map from '../modules/shared/pages/Map';

const style = {
  fontFamily:'Open Sans',
  fontSize: '90%'
};

export default class App extends React.Component{

  render() {
    return (
      <div style={style}>
        {/*<Link href="/map">Mappa</Link>*/}
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
