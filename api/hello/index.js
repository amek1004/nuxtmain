const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.send('TEST2 ' + Math.random())
})

module.exports = router