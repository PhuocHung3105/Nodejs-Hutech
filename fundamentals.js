const express = require('express');
const router = express.Router();

require('dotenv').config()
const variableData = process.env.variableData || 'Fundamentals'

router.get('/', function(req, res, next) {
  res.send({
    name: 'Fundamentals',
    server: 'express',
    variableData: variableData
  });
});

router.get('/Sumtwonumbers', function(req,res,next){
    res.send({
        name:'Fundamentals',
        sum: Sumtwonumbers(1,2)
    })
});
function Sumtwonumbers(a, b) {
    return a + b;
 }

router.get('/Comparison', function(req,res,next){
  res.send({
    name:'Fundamentals',
    result: Comparison(2,3)
  })
});
function Comparison(a, b) {
  return a === b;
}

router.get('/Gettypeofvalue',function(req,res,next){
  res.send({
    name: 'Fundamentals',
    sum: Gettypeofvalue(2,3)
  })
});
function Gettypeofvalue(a) {
  return typeof a;
}


router.get('/Getnthcharacter',function(req,res,next){
  res.send({
    name: 'Fundamentals',
    sum: Getnthcharacter('abcd',1)
  })
});
function Getnthcharacter(a, n) {
  return a[n - 1];
}

router.get('/Removefirstn',function(req,res,next){
  res.send({
    name: 'Fundamentals',
    sum: Removefirstn('abcdefg')
  })
});
function Removefirstn(a) {
  return a.slice(3);
}


router.get('/Getlastn',function(req,res,next){
  res.send({
    name: 'Fundamentals',
    sum: Getlastn('abcdefg')
  })
});

function Getlastn(str) {
  return str.slice(-3);
}


router.get('/Getfirstn',function(req,res,next){
  res.send({
    name: 'Fundamentals',
    sum: Getfirstn('abcdefg')
  })
});
function Getfirstn(a) {
  return a.slice(0, 3);
}
router.get('/Findtheposition',function(req,res,next){
  res.send({
    name: 'Fundamentals',
    sum: Findtheposition('praise')
  })
});
function Findtheposition(a) {
  return a.indexOf('is');
}

router.get('/Extractfirsthalf',function(req,res,next){
  res.send({
    name: 'Fundamentals',
    sum: Extractfirsthalf('abcdefgh')
  })
});
function Extractfirsthalf(a) {
  return a.slice(0, a.length / 2);
}

router.get('/Removelastn',function(req,res,next){
  res.send({
    name: 'Fundamentals',
    sum: Removelastn('abcdefg')
  })
});
function Removelastn(a) {
  return a.slice(0, -3);
}

router.get('/Returnthepercentage',function(req,res,next){
  res.send({
    name: 'Fundamentals',
    sum: Returnthepercentage(100,50)
  })
});

function Returnthepercentage(a, b) {
  return b / 100 * a
}
router.get('/BasicJavaScript',function(req,res,next){
  res.send({
    name: 'Fundamentals',
    sum: BasicJavaScript(6,5,4,3,2,1)

  })
});
function BasicJavaScript(a, b, c, d, e, f) {
   return (((a + b - c) * d) / e) ** f;
}
router.get('/Checkwhetherastring',function(req,res,next){
  res.send({
    name: 'Fundamentals',
    sum:Checkwhetherastring('cheese', 'cake')

  })
});
function Checkwhetherastring(a, b) {
  return a.includes(b) ? b + a : a + b;


}
router.get('/Checkifanumber',function(req,res,next){
  res.send({
    name: 'Fundamentals',
    sum: Checkifanumber(10)

  })
});

function Checkifanumber(a) {
  return a % 2 === 0
}


router.get('/Howmanytimes',function(req,res,next){
  res.send({
    name: 'Fundamentals',
    sum: Howmanytimes('m', 'how many times does the character occur in this sentence?')

  })
});
function Howmanytimes(a, b) {
  return b.split(a).length - 1
}

router.get('/Checkifanumber',function(req,res,next){
  res.send({
    name: 'Fundamentals',
    sum: Checkifanumber(4)

  })
});
function Checkifanumber(a) {
  return a - Math.floor(a) === 0
}

router.get('/Multiplicationdivision',function(req,res,next){
  res.send({
    name: 'Fundamentals',
    sum: Multiplicationdivision(10, 100)

  })
});
function Multiplicationdivision(a, b) {
  return a < b ? a / b : a * b
}

router.get('/Roundanumber',function(req,res,next){
  res.send({
    name: 'Fundamentals',
    sum: Roundanumber(2.12397)

  })
});
function Roundanumber(a) {
  return Number(a.toFixed(2));
}

router.get('/Splitanumber',function(req,res,next){
  res.send({
    name: 'Fundamentals',
    sum: Splitanumber(10)

  })
});
function Splitanumber( a ) {
  const string = a + '';
  const strings = string.split('');
  return strings.map(digit => Number(digit))
}

module.exports = router;

