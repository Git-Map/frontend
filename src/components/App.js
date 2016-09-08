import React from "react";
import { connect } from 'react-redux';

export default class App extends React.Component{

  render() {
    return (
      <h1>Git-Map</h1>
    );
  }
}

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps)(App);
