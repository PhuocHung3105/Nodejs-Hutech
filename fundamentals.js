const express = require('express');
const router = express.Router();

require('dotenv').config()
const variableData = process.env.variableData || 'Fundamentals'

router.get('/fundamentals', function(req, res, next) {
  res.send({
    name: 'fundamentals',
    server: 'express',
    variableData: variableData
  });
});


module.exports = router;
