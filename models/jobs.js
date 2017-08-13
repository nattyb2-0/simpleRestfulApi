 const jobs = require('../samplejobs');


function getJobs(req, res, next) {
    // const jobs = jobs;
    console.log(jobs)
    res.jobs = jobs

}

module.exports = {
  getJobs
};

