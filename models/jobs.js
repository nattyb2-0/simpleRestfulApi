 const jobs = require('../samplejobs');
const psql = require('../db/db.js');

function getJobs(req, res, next) {
    // const jobs = jobs;
    console.log(jobs)
    res.jobs = jobs

}

function addJobs(req,res,next){
  console.log('inside add jobs')
  console.log(req.body)
  const job = {
    companyname:req.body.name,
    jobtitle:req.body.title,
    startDate: new Date(),
    endDate: req.body.end ,
    description: req.body.description
  }
  console.log(job)

}

module.exports = {
  getJobs, addJobs
};

