import React from "react";

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

export default class Home extends React.Component{
  render() {
    return (
      <div>
        <img style={styleGitMapLogo} src={require('./assets/gitmap-logo.svg')}/>
        <p style={stylePayOff} >Many Languages, many countries, many developers</p>
        <a style={styleContactUs} href="mailto:info@codingjam.it" target="_black">contact us</a>
        <a href="http://www.comeonline.it/" target="_blank">
          <img style={styleComeLogo} src={require('./assets/come-logo.svg')}/>
        </a>
      </div>
    );
  }
}
