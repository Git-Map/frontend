import React from "react";
import { connect } from 'react-redux';

export default class App extends React.Component{

  render() {
    return (
      <div>
        <h1>Git-Map</h1>
        <img src={require('./logo.png')}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps)(App);
