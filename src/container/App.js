import React from "react";
import { connect } from 'react-redux';
import { Link, RelativeFragment as Fragment } from 'redux-little-router';

const style = {
  fontFamily:'Open Sans',
  fontSize: '90%'
};

const styleGitMapLogo = {
  marginTop: '2rem',
  marginLeft: '3rem'
};

const stylePayOff = {
    marginLeft: '3rem',
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

const styleContactUs = {
    backgroundColor: '#fff',
    borderRadius: '0.2rem',
    padding: '0.5rem 1rem',
    display: 'inline-block',
    marginLeft: '3rem',
    color: '#000',
    textDecoration: 'none'
};

export class App extends React.Component{

  render() {
    return (
      <div style={style}>
        <img style={styleGitMapLogo} src={require('./assets/gitmap-logo.svg')}/>
        <p style={stylePayOff} >Many Languages, many cauntries, many developers</p>
        <a style={styleContactUs} href="mailto:info@codingjam.it" target="_black">contact us</a>
        <Fragment forRoute='/'>
          <Link href="/map">Map</Link>
          <Fragment forRoute="/map">
              Mappa
          </Fragment>
        </Fragment>
        <img style={styleComeLogo} src={require('./assets/come-logo.svg')}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps)(App);
