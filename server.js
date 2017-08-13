"require strict";

// declaee all my constants needed for the running of this application
//these constants are modules/ dependencies from the node_module folders

const express = require('express');
const logger  = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');


//initiate the express application
const app = express();

//declare the port variable for development and for production
const PORT = process.argv[2] || process.env.port || 5000;

//set our initial request and response method
app.get('/', (req,res)=>{
  res.send('this is now an application tht is working!!!')
})

app.listen(PORT, () => console.log('server here! listening on', PORT));