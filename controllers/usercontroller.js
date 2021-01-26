var users = require('../models/users');
const jwt = require('jsonwebtoken');


exports.fetch_by_phone_no = async (req,res) => {
  var params = users.fetch_by_phone_no(req.body);
  req.dynamodb.get(params,function(err,data){
    if(data){
      jwt.sign(JSON.stringify(data.Item),"Never_disclose",(err,token)=>{
        if(err) {res.sendStatus(403);}
        else {res.status(200).send(token);}
      });
    }
    else {
      res.sendStatus(500);
    }
  });
}



exports.create_user = async (req,res) => {
  var params = users.create_user(req.body);
  req.dynamodb.put(params,function(err,data){
    if(err){
      res.sendStatus(500);
    }
    else {
      jwt.sign(req.body,"Never_disclose",(err,token)=>{
        if(err) {res.sendStatus(403);}
        else {res.status(200).send(token);}
      })
    }
  })
}
