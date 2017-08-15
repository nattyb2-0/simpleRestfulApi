const apiRouter = require('express').Router()
const {getJobs} =  require('../models/jobs')
 const jobs = require('../samplejobs');
const {addJobs} = require('../models/jobs')
const sendJSONresp = (req, res) => res.json(res.jobs || []);//res.jobs comes from the model getjobs function



apiRouter.get('/',  getJobs, sendJSONresp)

apiRouter.post('/jobs', addJobs, sendJSONresp)


module.exports = apiRouter;
