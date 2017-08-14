DROP TABLE IF EXISTS jobs;

CREATE TABLE jobs(
  id SERIAL PRIMARY KEY,
  companyname VARCHAR(128) NOT NULL,
  jobtitle VARCHAR(255) NOT NULL,
  createDate TIMESTAMP,
  accessedDate TIMESTAMP,
  startDate VARCHAR(100) NOT NULL,
  endDate VARCHAR(100),
  description TEXT

);


