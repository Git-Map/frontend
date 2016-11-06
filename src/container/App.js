import React from "react";
import { Link, Fragment } from 'redux-little-router';
import Home from '../modules/shared/pages/Home';
import Map from '../modules/shared/pages/Map';
import Loader from "../modules/shared/components/Loader/Loader";

const style = {
  fontFamily:'Open Sans',
  fontSize: '90%',
  backgroundColor: "#FC4732",
  color:"#FFFFFF"
};

export default class App extends React.Component{
  render() {
    return (
      <div style={style}>
        <Loader />
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
