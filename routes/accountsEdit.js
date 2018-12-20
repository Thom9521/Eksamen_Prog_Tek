var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
mongo = require('mongodb')
var url = "mongodb://localhost:27017/";

router.get('/', function(req, res, next) {
    res.render('accountsEdit', { title: 'Crypto Bank' });
  }); 

router.post('/put', function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("CryptoBank");
  var cid = Number(req.body.cidPUT);
  var oldValues = {cid: cid}
  var newValues={$set: {number: Number(req.body.numberPUT), valuta: req.body.valutaPUT, balance: Number(req.body.balancePUT), coins: req.body.coinsPUT}}

    dbo.collection("accounts").updateOne(oldValues, newValues, function (err, res) {
      if (err) throw err;
      console.log("1 document changed");
      db.close();
    });
  res.redirect("/accounts");
});
});

/*Bruges til at få værdierne fra documentent ind som values så man ikke skal skrive
det hele igen. Det virker desværre ikke. */
/*
router.get('/put/json/:uid', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("BEC_Bank");
    //var uidBody = Number(req.body.uidBody);
    dbo.collection("costumers").findOne({uid: Number(req.params.demo)}, function (err, result) {
      if (err) throw err;
      var obj = {};
      obj.costumers = result;
      res.json(obj);
     //res.redirect('/costumersEdit', {obj: obj});
      db.close();
    });
  })
});
*/
module.exports = router;
