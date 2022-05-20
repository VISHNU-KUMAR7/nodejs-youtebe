const reqFilter = (request, response, next) => {
    if (!request.query.age) {
      response.send("Please provide age");
    } else if (request.query.age <= 18) {
      response.send("Your are not elegible to welcome this page");
    } else {
      next();
    }
  };

module.exports = reqFilter