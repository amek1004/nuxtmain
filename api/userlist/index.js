const mysql      = require('mysql');
const dbconfig   = require('../../config/databaseuser.js');
const connection = mysql.createConnection(dbconfig);
const router = require('express').Router()


router.get('/', (req, res) => {
  connection.query('SELECT * from user', (error, topics) => {
    if (error) throw error;
     res.send(topics);
   //console.log(topics);

  });
});

module.exports = router