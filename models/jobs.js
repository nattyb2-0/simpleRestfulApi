const jobs = require('../samplejobs');
const psql = require('../db/db.js');

/*create a function to get all jobs
function will query jobs database for all info
then the response will be stored in a response object
then the next function called and then a catch of error*/
function getJobs(req, res, next) {
     psql.any(`SELECT * FROM jobs`)
    .then((response) => {
      res.jobs = response;
      next();
    })
    .catch(err => next(err));

}

function addJobs(req,res,next){
  console.log('inside add jobs')
  console.log(req.body)
  const job = {
    companyname:req.body.name,
    jobtitle:req.body.title,
    createDate: new Date(),
    startDate: req.body.start,
    endDate: req.body.end ,
    description: req.body.description
  }
  console.log(job)
  psql.one(`INSERT INTO jobs(companyname, jobtitle, createDate, startDate, endDate, description)
  VALUES('${job.companyname}', '${job.jobtitle}', '${job.createDate}','${job.startDate}', '${job.endDate}', '${job.description}')
  returning *;`)
  .then(next())
  .catch(error => console.log(error));


}

module.exports = {
  getJobs, addJobs
};

