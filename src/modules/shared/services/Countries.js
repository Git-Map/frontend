const DATA = require('./countries.json');

export default {
    list:() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(DATA);
            },1500);
        });
    }
};
