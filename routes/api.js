const apiRouter = require('express').Router()
const {getJobs} =  require('../models/jobs')
 const jobs = require('../samplejobs');
const {addJobs} = require('../models/jobs')
// apiRouter.get('/', getJobs,(req,res)=>{
//   console.log('in side the apiRouter')
//   res.send('still working on it')
// })

apiRouter.get('/',  (req, res)=>{
  res.json(jobs)
})

apiRouter.post('/jobs', addJobs, (req,res)=>{
  res.send('job added')
})

module.exports = apiRouter;
