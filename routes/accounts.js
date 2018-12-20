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
      res.render('accounts', obj);
      db.close();
    });
  })
});
//Delete
router.post('/delete/:id', function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("CryptoBank");
  var id = req.params.id;
  dbo.collection("accounts").deleteOne({ _id: new mongo.ObjectId(id) }, function (err, results) {

  });
  res.redirect("/accounts");
});
});

//Json objekt for hver enkelt konti
router.get('/json/:cid', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("CryptoBank");
    dbo.collection("accounts").findOne({cid: Number(req.params.cid)}, function (err, result) {
      if (err) throw err;
      var obj = {};
      obj.accounts = result;
     res.json(obj);
      db.close();
    });
  })
});
module.exports = router;
