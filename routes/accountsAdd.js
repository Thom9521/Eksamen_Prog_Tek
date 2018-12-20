var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
mongo = require('mongodb')
var url = "mongodb://localhost:27017/";


router.get('/', function(req, res, next) {
    res.render('accountsAdd', { title: 'Crypto Bank' });
  }); 

// Opret med POST
router.post('/post', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("CryptoBank");
    var accounts = {};
    accounts.cid = Number(req.body.cid);
    accounts.number = Number(req.body.number);
    accounts.valuta = req.body.valuta;
    accounts.balance = Number(req.body.balance);
    accounts.coins = req.body.coins;
    dbo.collection("accounts").insertOne(accounts, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
    res.redirect("/accounts");
  });
});

module.exports = router;
