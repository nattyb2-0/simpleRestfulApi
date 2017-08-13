const apiRouter = require('express').Router()
const {getJobs} =  require('../models/jobs')
 const jobs = require('../samplejobs');

// apiRouter.get('/', getJobs,(req,res)=>{
//   console.log('in side the apiRouter')
//   res.send('still working on it')
// })

apiRouter.get('/',  (req, res)=>{
  res.json(jobs)
})

module.exports = apiRouter;
