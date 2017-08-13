const apiRouter = require('express').Router()

function makeme(){
  console.log(apiRouter);

}


apiRouter.get('/', makeme,(req,res)=>{
  res.send('inside the api router to see if working')
  .then(console.log(apiRouter))
})

module.exports = apiRouter;
