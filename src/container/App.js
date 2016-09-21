import React from "react";
import { connect } from 'react-redux';

const style = {
  fontFamily:'Open Sans'
};

export class App extends React.Component{

  render() {
    return (
      <div style={style}>
        <h1>Git-Map</h1>
        <img src={require('./logo.svg')}/>

        <img src={require('./come-logo.svg')}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps)(App);
