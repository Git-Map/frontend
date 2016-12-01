import { mapStateToProps } from './Home';

describe('Home',() => {
  describe('mapStateToProps', () => {
    it('should return a valid object if no countries are present',() => {
      const INITIAL_STATE = {};

      const EXPECTATION = {
        values:{
          it:{
            percentage:0,
            value:0
          },
          fr:{
            percentage:0,
            value:0
          },
          uk:{
            percentage:0,
            value:0
          },
          sp:{
            percentage:0,
            value:0
          },
          ge:{
            percentage:0,
            value:0
          }
        }
      };

      expect(mapStateToProps(INITIAL_STATE)).toEqual(EXPECTATION);
    });

    it('should return value and percentage for each country when data is present',() => {
      const INITIAL_STATE = {
        shared:{
          countries:{
            "fr": {
              "users": 2000
            },
            "uk": {
              "users": 500
            },
            "sp": {
              "users": 1000
            },
            "it": {
             "users": 500
            },
            "ge": {
              "users": 1000
            }
          }
        }
      };

      const EXPECTATION = {
        values:{
          it:{
            percentage:0.1,
            value:500
          },
          fr:{
            percentage:0.4,
            value:2000
          },
          uk:{
            percentage:0.1,
            value:500
          },
          sp:{
            percentage:0.2,
            value:1000
          },
          ge:{
            percentage:0.2,
            value:1000
          }
        }
      };

      expect(mapStateToProps(INITIAL_STATE)).toEqual(EXPECTATION);
    })
  })
});
