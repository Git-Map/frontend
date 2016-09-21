import React from "react";
import { connect } from 'react-redux';

export class App extends React.Component{

  render() {
    return (
      <div>
        <h1>Git-Map</h1>
        <img src={require('./logo.svg')}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps)(App);
