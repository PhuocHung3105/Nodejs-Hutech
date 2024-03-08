const express = require('express');
const router = express.Router();

require('dotenv').config()
const variableData = process.env.variableData || 'Resolving JavaScript Promises'

router.get('/Resolving-JavaScript-Promises', function(req, res, next) {
  res.send({
    name: 'async-await',
    server: 'express',
    variableData: variableData
  });
});



module.exports = router;
