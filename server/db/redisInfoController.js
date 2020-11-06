module.exports = tableName => {

    return {
      // Post a Customer
      create: (req, res) => {
        let mm = require("./redisInfoModel")(tableName);
        mm.create(req.body)
          .then(result => {
            res.json(result);
          })
          .catch(ee => {
            console.log("in Create -> " + ee.message);
            throw Error("An error occurred in create.");
          });
      }, 
    }
}