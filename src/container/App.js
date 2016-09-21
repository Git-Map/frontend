import React from "react";
import { connect } from 'react-redux';

const style = {
  fontFamily:'Open Sans',
  fontSize: '90%'
};

const styleGitMapLogo = {
  marginTop: '2rem',
  marginLeft: '2rem'
};

const stylePayOff = {
    marginLeft: '2rem',
    fontWeight: '300',
    textTransform: 'capitalize',
    fontSize: '1.3rem',
    textAlign: 'left'
};

const styleComeLogo = {
  position:'absolute',
  bottom: '2rem',
  right: '2rem'
};

export class App extends React.Component{

  render() {
    return (
      <div style={style}>
        <img style={styleGitMapLogo} src={require('./assets/gitmap-logo.svg')}/>
        <p style={stylePayOff} >Many Languages, many cauntries, many developers</p>
        <img style={styleComeLogo} src={require('./assets/come-logo.svg')}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps)(App);
