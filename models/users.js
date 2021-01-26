exports.fetch_by_phone_no = function(body) {
  return {
    TableName: "Users",
    Key: {
      "phoneNumber": body.phoneNumber
    }
  };
}

exports.create_user = function(body) {
  return {
    TableName: "Users",
    Item: {
      "phoneNumber": body.phoneNumber,
      "firstName": body.firstName,
      "lastName": body.lastName
    }
  }
}
