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

//allow our app to use the dependencies as middlewares
/*Express is a routing and middleware web framework that has minimal functionality of its own:
An Express application is essentially a series of middleware function calls.
Middleware functions are functions that have access to the request object (req),
the response object (res), and the next middleware function in the application’s request-response cycle.
The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:
Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.*/
app.use(logger('dev'))

//tell our app to listen and what port to listen on
app.listen(PORT, () => console.log('server here! listening on', PORT));
