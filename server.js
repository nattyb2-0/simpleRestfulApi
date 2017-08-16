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
const PORT = process.argv[2] || process.env.port || 3000;

//set our initial request and response method
// app.get('/', (req,res)=>{
//   res.send('this is now an application tht is working!!!')
// })

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

//Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json())

//allow app to use error middleware
app.use((err, req, res, next)=> {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

//// require our routes which will serve as our custom middleware to handle all request, response
//methods
const apiRouter = require('./routes/api');

//use our routes for the application as middleware
app.use('/api', apiRouter)
app.use('/users', (req,res)=> res.send('this will be user route'))




 app.get('/', (req,res,next)=>{
  res.send('this will end up being the home page')
 })



//tell our app to listen and what port to listen on
app.listen(PORT, () => console.log('server here! listening on', PORT));
