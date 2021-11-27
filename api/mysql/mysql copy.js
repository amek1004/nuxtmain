var express = require('express');
var router = express.Router();
const mysql      = require('mysql');
const dbconfig   = require('../../config/database.js');
const connection = mysql.createConnection(dbconfig);

router.get('/', (req, res) => {
  connection.query('SELECT * from topic', (error, topics) => {
    if (error) throw error;
   res.send(topics);
   //console.log(topics);
  });
});






module.exports = router;