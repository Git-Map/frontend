const DATA = require('./countries.json');

export default {
    list:() => {
      return new Promise((resolve,reject) => {
          setTimeout(() => {
            resolve(DATA);
          },1500);
      });
    }
};
