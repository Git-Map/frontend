import React from "react";
import { connect } from 'react-redux';
import loaderImage from './loader.svg';

const style = {
  position: "fixed",
  left: 0,
  top: 0,
  zIndex: 999,
  width: "100%",
  height: "100%",
  overflow: "visible",
  opacity:0.5,
  background: 'url(' + loaderImage + ') #FC4732 no-repeat center center'
};

const mapStateToProps = (state) => {
  return {
    loading:state.shared.loading
  };
};

class Loader extends React.Component{
  render() {
    return this.props.loading ? <div style={style}></div> : <noscript/>;
  }
}

export default connect(mapStateToProps)(Loader);
