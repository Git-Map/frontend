import React from "react";
import { Grid, Row, Cell } from 'react-inline-grid';
import { connect } from 'react-redux';
import { map, reduce } from 'lodash';
import { get } from 'dot-prop';

import RadialChart from "../components/RadialChart/RadialChart";
import Actions from "../state/actions";

const styleGitMapLogo = {
  marginTop: '0.5rem',
  marginLeft: '0.5rem',
  width: '1rem'
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

const stipes = {
    wrapper: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        overflowY: 'auto'
    },
    video: {
        backgroundColor: '#000',
        minHeight: '80%'
    },
    slider: {
        backgroundColor: '#232D33',
        minHeight: '80%'
    },
    fiveNation: {
        backgroundColor: '#4D6070',
        minHeight: '50%',
        title: {
            textAlign: 'center'
        }

    },
    manyLanguages: {
        backgroundColor: '#678093',
        minHeight: '50%',
        title: {
            textAlign: 'center'
        }

    },
    abbassador: {
        backgroundColor: '#FF4527',
        minHeight: '50%',
        title: {
            textAlign: 'center'
        }

    },
    about: {
        backgroundColor: '#F2F2F2',
        minHeight: '50%',
        title: {
            textAlign: 'center',
            color: '#FF4527',
        }

    },
    footer: {
        backgroundColor: '#181E23',
        minHeight: '50px'
    },
};


class Home extends React.Component{

  componentDidMount(){
    this.props.dispatch(Actions.fetchCountries());
  }

  render() {
    return (
      <div style={stipes.wrapper}>

        {/* <p style={stylePayOff} >Many Languages, many countries, many developers</p>
        <a style={styleContactUs} href="mailto:info@codingjam.it" target="_black">contact us</a>
        <a href="http://www.comeonline.it/" target="_blank">
          <img style={styleComeLogo} src={require('../assets/come-logo.svg')}/>
        </a> */}
        {
            /*
                <img style={styleGitMapLogo} src={require('../assets/gitmap-logo.svg')}/>
            */
        }
        <div style={stipes.video}>
            <Grid>
                <Row is="center">
                    <Cell is="3 tablet-4 phone-4">
                        <div>

                        </div>
                    </Cell>
                    <Cell is="3 tablet-4 phone-4">
                        <div>



                        </div>
                    </Cell>
                </Row>
            </Grid>
        </div>
        <div style={stipes.slider}>
            <Grid>
                <Row is="center">
                    <Cell is="9 tablet-8 phone-12">
                        <div>graph<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
                    </Cell>
                    <Cell is="bottom 3 tablet-4 phone-12">
                        <div>text</div>
                    </Cell>
                </Row>
            </Grid>
        </div>
        <div style={stipes.fiveNation}>
            <Grid>
                <Row is="center">
                    <Cell is="12">
                        <div style={stipes.fiveNation.title}>Our 5 Nation</div>
                    </Cell>
                    <Cell is="2 tablet-3 phone-12">
                        <RadialChart progress={this.props.percentages.it}></RadialChart>
                        <div>Italy</div>
                    </Cell>
                    <Cell is="2 tablet-3 phone-12">
                        <RadialChart progress={this.props.percentages.uk}></RadialChart>
                        <div>Great Britain</div>
                    </Cell>
                    <Cell is="2 tablet-3 phone-12">
                        <RadialChart progress={this.props.percentages.fr}></RadialChart>
                        <div>France</div>
                    </Cell>
                    <Cell is="2 tablet-3 phone-12">
                        <RadialChart progress={this.props.percentages.sp}></RadialChart>
                        <div>Spain</div>
                    </Cell>
                    <Cell is="2 tablet-3 phone-12">
                        <RadialChart progress={this.props.percentages.ge}></RadialChart>
                        <div>Germany</div>
                    </Cell>
                </Row>
            </Grid>
        </div>
        <div style={stipes.manyLanguages}>
            <Grid>
                <Row is="center">
                    <Cell is="12">
                        <div style={stipes.manyLanguages.title}>We Speak many languages</div>
                    </Cell>
                    <Cell is="2 tablet-3 phone-12">
                        <div>1<br/></div>
                    </Cell>
                    <Cell is="2 tablet-3 phone-12">
                        <div>2<br/></div>
                    </Cell>
                    <Cell is="2 tablet-3 phone-12">
                        <div>3<br/></div>
                    </Cell>
                    <Cell is="2 tablet-3 phone-12">
                        <div>4<br/></div>
                    </Cell>
                    <Cell is="2 tablet-3 phone-12">
                        <div>5<br/></div>
                    </Cell>
                </Row>
            </Grid>
        </div>
        <div style={stipes.abbassador}>
            <Grid>
                <Row is="center">
                    <Cell is="12">
                        <div style={stipes.abbassador.title}>ambassador</div>
                    </Cell>
                    <Cell is="3 tablet-3 phone-12">
                        <div>1<br/></div>
                    </Cell>
                    <Cell is="3 tablet-3 phone-12">
                        <div>2<br/></div>
                    </Cell>
                    <Cell is="3 tablet-3 phone-12">
                        <div>3<br/></div>
                    </Cell>
                    <Cell is="3 tablet-3 phone-12">
                        <div>4<br/></div>
                    </Cell>
                </Row>
            </Grid>
        </div>
        <div style={stipes.about}>
            <Grid>
                <Row is="center">
                    <Cell is="12">
                        <div style={stipes.about.title}>about</div>
                    </Cell>
                    <Cell is="9 tablet-10 phone-12">
                        <div>1<br/></div>
                    </Cell>
                </Row>
            </Grid>
        </div>
        <div style={stipes.footer}>
            <Grid>
                <Row is="center">
                    <Cell is="3">
                        <div>logo1</div>
                    </Cell>
                    <Cell is="9">
                        <div>logo2</div>
                    </Cell>
                </Row>
            </Grid>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {

  const props = {
    percentages:{
      it:0,
      fr:0,
      uk:0,
      sp:0,
      ge:0
    }
  };

  const countries = get(state, 'shared.countries');
  if(countries){
    const total = reduce(countries,(total, country) => total + country.users, 0);
    Object.keys(countries).forEach(key => {
      props.percentages[key] = countries[key].users / total;
    })
  }

  return props;
};

export default connect(mapStateToProps)(Home);
