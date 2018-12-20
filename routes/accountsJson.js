var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
mongo = require('mongodb')
var url = "mongodb://localhost:27017/";


//Hent med GET
router.get('/', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("CryptoBank");
    dbo.collection("accounts").find({}).toArray(function (err, result) {
      if (err) throw err;
      var obj = {};
      obj.accounts = result;
      res.json(obj);
      db.close();
    });
  });
});
module.exports = router;
