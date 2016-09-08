var ghpages = require('gh-pages');

var options = {
    src:[
        "index.html",
        "build/**/*"
    ]
};

ghpages.publish(__dirname,options,function(){
   console.log("Published!");
});
