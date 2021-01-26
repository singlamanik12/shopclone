const AWS = require("aws-sdk");

let awsConfig = {
  "region": "ap-south-1",
  "endpoint": "https://dynamodb.ap-south-1.amazonaws.com",
  "accessKeyId": "AKIAUY2XXGGSYEMDK65Q",
  "secretAccessKey": "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"
}

AWS.config.update(awsConfig);

module.exports = AWS;
