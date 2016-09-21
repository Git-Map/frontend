const DATA = require('./countries.json');

export default {
    list:() => {
      return new Promise((resolve,reject) => {
          resolve(DATA);
      });
    }
};
