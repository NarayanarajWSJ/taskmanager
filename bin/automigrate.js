var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.postgres;

var Schemas = ["taskuser","group","groupusers","tasks"];

// for (i = 0; i < Schemas.length; i++) { 
//   console.log(Schemas[i] + ' Creating')
//   ds.isActual(Schemas[i], function(err) {
//     ds.autoupdate(Schemas[i], function(err) {
//       if (err){ 
//         console.log(err)
//         throw err;
//       }
//     });
//   });
//   ds.disconnect();
// }


// for (i = 0; i < Schemas.length; i++) { 
//   var res=null;

//   ds.isActual(Schemas[i]);
//   console.log('actual');
//   res = ds.autoupdate(Schemas[i]);
//   console.log('autoupdate');
//   ds.disconnect();
//   console.log('disconnect');
//   while(res==null){
    
//   }
//   console.log(res);
// }

ds.isActual("taskuser", function(err) {
  ds.autoupdate("taskuser", function(err) {
    if (err){ 
      console.log(err)
      throw err;
    }
    ds.disconnect();
  });
});