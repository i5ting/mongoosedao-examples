
require('./lib/db');

var Top = require('./lib/Top');

// console.log(Top)
 
 
 
Top.createAsync({username: "alfred"}).then(function(top){
  
  console.log(top)

})