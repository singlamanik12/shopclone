const AWS = require('./awsconnection');

module.exports = new AWS.DynamoDB.DocumentClient();
